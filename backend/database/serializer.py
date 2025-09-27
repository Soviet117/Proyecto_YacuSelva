from rest_framework import serializers
from .models import Persona


class personaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = '__all__'
