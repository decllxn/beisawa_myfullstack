from django.db import models

class CustomerFeedback(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    feedback = models.TextField()

class SupplierEngagement(models.Model):
    company_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    details = models.TextField()

class CorporateOnboarding(models.Model):
    company_name = models.CharField(max_length=100)
    contact_person = models.CharField(max_length=100)
    onboarding_details = models.TextField()