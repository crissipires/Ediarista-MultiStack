from django.urls import path
from .views import DiaristasCidadeLista

urlpatterns = [
    path('diarista-cidade', DiaristasCidadeLista.as_view(), name='diaristas-cidade-list'),
]

