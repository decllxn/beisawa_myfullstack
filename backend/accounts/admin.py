from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group, Permission
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    # Define the fields to display in the list view
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'is_active')
    # Define the fields to include in the add and change forms
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'email')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    # Define which fields should be included in the add form
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2'),
        }),
    )
    # Define the search fields
    search_fields = ('username', 'email')
    # Define the ordering
    ordering = ('username',)

# Register the CustomUser model with the custom admin class
admin.site.register(CustomUser, CustomUserAdmin)