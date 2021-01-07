from django.contrib.auth.tokens import PasswordResetTokenGenerator
from knox.models import AuthToken
from rest_framework import generics, status, permissions
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from smtplib import SMTPAuthenticationError
from account.account_email import SendEmail
from account.api.serializers import (RegisterSerializer,
                                     LoginSerializer,
                                     UserSerializer,
                                     PasswordResetRequestSerializer,
                                     PasswordResetSerializer)
from account.models import User
from blog.api.serializers import BlogPostSerializer
from blog.models import BlogPost
from macrobros.pagination import CustomPagination


class Register(generics.GenericAPIView):
    """User Registration API View"""

    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()

            try:
                SendEmail().account_confirmation_email(
                    request,
                    user.first_name,
                    AuthToken.objects.create(user)[1]
                )
            except SMTPAuthenticationError:
                return Response({ 'internal': ['Oops something went wrong!',
                                               'We are experiencing some technical difficulties '
                                               'Please try and register again at a later time. '
                                               'Thank you for your patience.'] },
                                status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            return Response({ 'internal': ['Thank you for registering!',
                                           'A verification email has been sent to your email account. '
                                           'Please check your inbox to verify your email and activate your account.'] },
                            status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Login(generics.GenericAPIView):
    """User Login"""

    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            if user.is_closed:
                return Response({
                    'email': 'This account has been closed. Please reset your password to reactivate your account.'
                }, status=status.HTTP_400_BAD_REQUEST)

            if user.is_verified:
                return Response({
                    'user': UserSerializer(user, context=self.get_serializer_context()).data,
                    'token': AuthToken.objects.create(user)[1]
                }, status=status.HTTP_200_OK)
            else:
                return Response({
                    'email': 'Please verify your email address!'
                }, status=status.HTTP_401_UNAUTHORIZED)
        else:
            try:
                User.objects.get(email=serializer.data['email'])
                return Response({
                    'password': 'Incorrect password!'
                }, status=status.HTTP_400_BAD_REQUEST)
            except User.DoesNotExist:
                return Response({
                    'email': 'No account with this email!'
                }, status=status.HTTP_400_BAD_REQUEST)


class VerifyEmail(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def post(self, request, *args, **kwargs):
        try:
            self.request.user.is_verified = True
            self.request.user.save()
            return Response({
                'emailVerified': True,
                'message': ['Your account has been activated successfully!',
                            'Click the button below to login or continue reading our awesome blogs.']
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({
                'emailVerified': False,
                'message': ['The verification link you tried to use has expired!',
                            'Please try registering with us again or contacting us if the issue persists.']
            }, status=status.HTTP_401_UNAUTHORIZED)


class PasswordResetRequest(generics.GenericAPIView):
    serializer_class = PasswordResetRequestSerializer

    def post(self, request, *args, **kwargs):
        try:
            serializer = self.serializer_class(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = User.objects.get(email=request.data['email'])
            user.is_closed = False
            SendEmail().password_reset_email(request,
                                             user.first_name,
                                             AuthToken.objects.create(user)[1],
                                             PasswordResetTokenGenerator().make_token(user))
            return Response(
                { 'success': True },
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                { 'success': False },
                status=status.HTTP_400_BAD_REQUEST
            )


class PasswordReset(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PasswordResetSerializer

    def post(self, request, *args, **kwargs):
        try:
            serializer = self.serializer_class(data=request.data, context={ 'request': self.request })
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


class UpdateUser(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = UserSerializer

    def put(self, request, *args, **kwargs):
        serializer = UserSerializer(self.request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            if 'is_closed' in request.data:
                return Response({ 'closed': True }, status=status.HTTP_200_OK)
            return Response({ 'update': True }, status=status.HTTP_200_OK)
        return Response({ 'update': False }, status=status.HTTP_400_BAD_REQUEST)


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
        return Response({ 'blog_saved': 'Saved' }, status=status.HTTP_200_OK)
