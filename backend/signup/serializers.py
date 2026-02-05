from rest_framework import serializers
from .models import ClinicParent

class ClinicParentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClinicParent
        fields = ['id', 'name', 'clinic_name', 'clinic_email', 'username', 'password']
    