from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import ClinicParent
from .serializers import ClinicParentSerializer

class SignupViewSet(viewsets.ModelViewSet):
    queryset = ClinicParent.objects.all()
    serializer_class = ClinicParentSerializer