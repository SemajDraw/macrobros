import re
from rest_framework import serializers
from account.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.tokens import PasswordResetTokenGenerator


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
        fields = ['first_name', 'last_name', 'email', 'is_subscribed', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self, **kwargs):
        user = User(
            first_name=self.validated_data['first_name'],
            last_name=self.validated_data['last_name'],
            email=self.validated_data['email'],
            is_subscribed=self.validated_data['is_subscribed']
        )
        password1 = self.validated_data['password']
        password2 = self.validated_data['password2']

        if (password1 != password2) or not self.validatePassword(password1):
            raise serializers.ValidationError({'message': 'Passwords must match'})

        user.set_password(password1)
        user.save()
        return user

    @staticmethod
    def validatePassword(password):
        pattern = re.compile('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        return True if re.search(pattern, password) else False


class LoginSerializer(serializers.Serializer):
    """User Login Serializer"""

    email = serializers.EmailField()
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError('Incorrect credentials')


class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=2)

    class Meta:
        fields = ['email']

    def validate(self, attrs):
        email = attrs.get('email', '')
        return User.objects.get(email=email)


class PasswordResetSerializer(serializers.Serializer):
    token = serializers.CharField(min_length=2)
    password = serializers.CharField(min_length=2, write_only=True)
    password1 = serializers.CharField(min_length=2, write_only=True)

    class Meta:
        fields = ['token', 'password', 'password1']

    def validate(self, attrs):
        try:
            password = self.context['request'].data['password']
            password1 = self.context['request'].data['password1']
            token = self.context['request'].data['token']
            if PasswordResetTokenGenerator().check_token(self.context['request'].user, token) and (password == password1):
                return True
        except Exception as e:
            return e
