"""
News serializer modal
"""
from rest_framework import serializers
from .models import News


class NewsSerializer(serializers.ModelSerializer):
    """
    News serializer
    """
    class Meta:
        model = News
        fields = ['pk', 'title', 'date_time', 'description', 'phone']
