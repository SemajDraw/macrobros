from rest_framework import serializers
from account.models import User
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email')


class RegisterSerializer(serializers.ModelSerializer):
    """User Registration Serializer"""

    password = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self, **kwargs):
        user = User(
            first_name=self.validated_data['first_name'],
            last_name=self.validated_data['last_name'],
            email=self.validated_data['email']
        )
        password1 = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password1 != password2:
            raise serializers.ValidationError({'message': 'Passwords must match'})

        user.set_password(password1)
        user.save()
        return user


class LoginSerializer(serializers.Serializer):
    """User Login Serializer"""

    email = serializers.EmailField()
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError('Incorrect credentials')
