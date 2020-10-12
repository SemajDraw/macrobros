from knox.models import AuthToken
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.generics import ListAPIView

from macrobros.pagination import CustomPagination
from .serializers import RegisterSerializer, LoginSerializer, UserSerializer
from ..account_email import ConfirmationEmail
from blog.models import BlogPost
from blog.api.serializers import BlogPostSerializer


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


class GetUser(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request, *args, **kwargs):
        return Response({
            'user': UserSerializer(self.request.user, context=self.get_serializer_context()).data
        }, status=status.HTTP_200_OK)


class GetClappedBlogs(ListAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = BlogPostSerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        user = self.request.user
        clapped_blogs = user.clapped_blogs
        blogs = BlogPost.objects.filter(id__in=clapped_blogs)
        return blogs
