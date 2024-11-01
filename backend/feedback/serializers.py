from rest_framework import serializers
from .models import CorporateOnboarding, SupplierEngagement, CustomerFeedback

class CustomerFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerFeedback
        fields = '__all__'

class SupplierEngagementSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupplierEngagement
        fields = '__all__'

class CorporateOnboardingSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorporateOnboarding
        fields = '__all__' 