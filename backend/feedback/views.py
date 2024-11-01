from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .models import CustomerFeedback, SupplierEngagement, CorporateOnboarding
from .serializers import CustomerFeedbackSerializer, SupplierEngagementSerializer, CorporateOnboardingSerializer
from rest_framework.filters import SearchFilter
from rest_framework.filters import OrderingFilter
from rest_framework.permissions import IsAuthenticated, BasePermission

class IsBusinessOwner(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.is_staff
    
class CustomerFeedbackViewSet(viewsets.ModelViewSet):
    queryset = CustomerFeedback.objects.all()
    serializer_class = CustomerFeedbackSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name', 'email']
    search_fields = ['name', 'feedback']
    ordering_fields = ['name', 'email']
    permission_classes = [IsAuthenticated, IsBusinessOwner]

class SupplierEngagementViewSet(viewsets.ModelViewSet):
    queryset = SupplierEngagement.objects.all()
    serializer_class = SupplierEngagementSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['company_name', 'email']
    search_fields = ['company_name', 'details']
    ordering_fields = ['company_name', 'email']
    permission_classes = [IsAuthenticated, IsBusinessOwner]

class CorporateOnboardingViewSet(viewsets.ModelViewSet):
    queryset = CorporateOnboarding.objects.all()
    serializer_class = CorporateOnboardingSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['company_name', 'contact_person']
    search_fields = ['company_name', 'onboarding_details']
    ordering_fields = ['company_name', 'contact_person']
    permission_classes = [IsAuthenticated, IsBusinessOwner]
