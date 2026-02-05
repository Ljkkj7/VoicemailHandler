from django.db import models

# Create your models here.

class ClinicParent(models.Model):
    name = models.CharField(max_length=100)
    clinic_name = models.CharField(max_length=100)
    clinic_email = models.EmailField(unique=True)
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name