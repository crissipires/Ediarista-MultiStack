import random

from rest_framework import serializers
from web.models import Diaristas

class DiaristaCidadeSerializer(serializers.ModelSerializer):
    reputacao = serializers.SerializerMethodField()
    class Meta:
        model = Diaristas
        fields = ('nome_completo','foto_usuario','cidade', 'reputacao')

        def get_reputacao(selfs, obj):
            return random.randint(0,5)
