from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from account.forms import (AdminUserCreationForm, AdminUserChangeForm)
from account.models import User


class UserAdmin(BaseUserAdmin):
    """User admin view"""

    # Setting the admin user forms
    form = AdminUserChangeForm
    add_form = AdminUserCreationForm

    # Setting the formatting for the user admin page
    list_display = ('id', 'email', 'first_name', 'last_name', 'date_joined', 'is_admin', 'is_subscribed', 'is_active', 'is_closed')
    list_filter = ('is_admin', 'is_staff', 'is_active', 'is_subscribed', 'is_closed')

    # Display user fieldsets
    fieldsets = (
        ('Primary', { 'fields': ('email', 'password') }),
        ('Personal info', { 'fields': ('first_name', 'last_name') }),
        ('Permissions',
         { 'fields': ('is_subscribed', 'is_closed', 'is_active', 'is_verified', 'is_staff', 'is_admin', 'is_superuser') }),
    )

    # Add user fieldsets
    add_fieldsets = (
        ('Create new user', {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'password1', 'password2', 'is_subscribed', 'is_closed') }
         ),
    )

    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)
    filter_horizontal = ()


admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
