from django.shortcuts import render
from .models import Persona
from django.http import JsonResponse, HttpResponse
from .serializer import personaSerializer
from rest_framework import viewsets

# Create your views here.


def loadPeople(request):
    personas = list(Persona.objects.values())
    return JsonResponse(personas, safe=False)


class personaView(viewsets.ModelViewSet):
    queryset = Persona.objects.all()
    serializer_class = personaSerializer
