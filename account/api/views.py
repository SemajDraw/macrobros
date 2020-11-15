from knox.models import AuthToken
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.generics import ListAPIView

from macrobros.pagination import CustomPagination
from .serializers import (RegisterSerializer,
                          LoginSerializer,
                          UserSerializer,
                          PasswordResetRequestSerializer,
                          PasswordResetSerializer)
from ..account_email import ConfirmationEmail, PasswordResetEmail
from blog.models import BlogPost
from blog.api.serializers import BlogPostSerializer
from ..models import User


class Register(generics.GenericAPIView):
    """User Registration API View"""

    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()

            ConfirmationEmail.send_confirmation_email(
                user,
                request,
                AuthToken.objects.create(user)[1]
            )
            return Response({
                'message': 'Thank you for registering! Please check your email to verify your email address'
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Login(generics.GenericAPIView):
    """User Login"""

    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            if user.is_verified:
                return Response({
                    'user': UserSerializer(user, context=self.get_serializer_context()).data,
                    'token': AuthToken.objects.create(user)[1]
                }, status=status.HTTP_201_CREATED)
            else:
                return Response({
                    'non_field_errors': ['Please verify your email address']
                }, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VerifyEmail(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def post(self, request, *args, **kwargs):
        try:
            self.request.user.is_verified = True
            self.request.user.save()
            return Response({
                'emailVerified': True,
                'message': ['Account activated successfully!', 'Please login']
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({
                'emailVerified': False,
                'message': ['Verification link has expired!', 'Please register again']
            }, status=status.HTTP_401_UNAUTHORIZED)


class PasswordResetRequest(generics.GenericAPIView):
    serializer_class = PasswordResetRequestSerializer

    def post(self, request, *args, **kwargs):
        try:
            serializer = self.serializer_class(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = User.objects.get(email=request.data['email'])
            PasswordResetEmail.send_password_reset_email(request,
                                                         user.first_name,
                                                         AuthToken.objects.create(user)[1],
                                                         PasswordResetTokenGenerator().make_token(user))
            return Response(
                {'passwordReset': 'Please check your email to reset your password'},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {'passwordReset': 'Please check your email to reset your password'},
                status=status.HTTP_200_OK
            )


class PasswordReset(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PasswordResetSerializer

    def post(self, request, *args, **kwargs):
        try:
            serializer = self.serializer_class(data=request.data, context={'request': self.request})
            serializer.is_valid(raise_exception=True)
            user = self.request.user
            user.set_password(request.data['password'])
            user.save()
            return Response({
                'passwordReset': ['Your password has already been reset', 'Please try and login']
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({
                'passwordReset': ['Your password has already been reset', 'Please try and login']
            }, status=status.HTTP_200_OK)


class GetUser(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request, *args, **kwargs):
        return Response({
            'user': UserSerializer(self.request.user, context=self.get_serializer_context()).data
        }, status=status.HTTP_200_OK)


class GetSavedBlogs(ListAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = BlogPostSerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        user = self.request.user
        saved_blogs = user.saved_blogs
        blogs = BlogPost.objects.filter(id__in=saved_blogs)
        return blogs


class SaveBlogView(generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def put(self, request, *args, **kwargs):
        blog_id = self.request.data['blog_id']
        # Update User
        user = self.request.user
        if blog_id not in user.saved_blogs:
            user.saved_blogs.append(blog_id)
        user.save()
        return Response({'blog_saved': 'Saved'}, status=status.HTTP_200_OK)
