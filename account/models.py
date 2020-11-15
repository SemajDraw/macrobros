import uuid

from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)
from django.contrib.postgres.fields import ArrayField
from django.db import models
from knox.models import AuthToken


class UserManager(BaseUserManager):
    def create_user(self, first_name, last_name, email, password=None):
        self.validate_inputs(first_name, last_name, email, password)

        user = self.model(
            first_name=first_name,
            last_name=last_name,
            email=self.normalize_email(email),
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_staffuser(self, first_name, last_name, email, password):
        user = self.create_user(
            first_name=first_name,
            last_name=last_name,
            email=email,
            password=password
        )
        user.is_staff = True
        user.save(using=self._db)
        AuthToken.objects.create(user=user)
        return user

    def create_superuser(self, first_name, last_name, email, password):
        user = self.create_user(
            first_name=first_name,
            last_name=last_name,
            email=email,
            password=password
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        AuthToken.objects.create(user=user)
        return user

    @staticmethod
    def validate_inputs(first_name, last_name, email, password):
        if not first_name or not last_name or not email or not password:
            raise ValueError('Required field')


class User(AbstractBaseUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    first_name = models.CharField(verbose_name='First Name', max_length=100, blank=False, null=False)
    last_name = models.CharField(verbose_name='Last Name', max_length=100, blank=False, null=False)
    email = models.EmailField(verbose_name='Email Address', max_length=255, unique=True, blank=False, null=False)
    saved_blogs = ArrayField(models.IntegerField(verbose_name='Saved Blogs', blank=True, null=True, unique=True),
                             blank=True, default=list)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email

    def get_full_name(self):
        return '%s %s' % (self.first_name, self.last_name)

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

# @receiver(post_save, sender=settings.AUTH_USER_MODEL)
# def create_auth_token(sender, instance=None, created=False, **kwargs):
#     if created:
#         AuthToken.objects.create(user=instance)
