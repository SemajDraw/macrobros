from rest_framework import generics, status, permissions
from rest_framework.response import Response
from knox.models import AuthToken

from .serializers import RegisterSerializer, LoginSerializer, UserSerializer


class Register(generics.GenericAPIView):
    """User Registration API View"""

    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                'user': UserSerializer(user, context=self.get_serializer_context()).data,
                'token': AuthToken.objects.create(user)[1]
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Login(generics.GenericAPIView):
    """User Login"""

    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            return Response({
                'user': UserSerializer(user, context=self.get_serializer_context()).data,
                'token': AuthToken.objects.create(user)[1]
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class User(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request, *args, **kwargs):
        return Response({
            'user': UserSerializer(self.request.user, context=self.get_serializer_context()).data
        }, status=status.HTTP_200_OK)
