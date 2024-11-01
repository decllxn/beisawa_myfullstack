from django.contrib import admin
from .models import CustomerFeedback, SupplierEngagement, CorporateOnboarding

@admin.register(CustomerFeedback)
class CustomerFeedbackAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'feedback')
    search_fields = ('name', 'email')

@admin.register(SupplierEngagement)
class SupplierEngagementAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'email', 'details')
    search_fields = ('company_name', 'email')

@admin.register(CorporateOnboarding)
class CorporateOnboardingAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'contact_person', 'onboarding_details')
    search_fields = ('company_name', 'contact_person')
