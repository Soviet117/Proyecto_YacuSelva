from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'persona', views.personaView, 'persona')

urlpatterns = [
    path('loadP/', views.loadPeople, name='GETPersonas'),
    path('api/v1/', include(router.urls))
]
