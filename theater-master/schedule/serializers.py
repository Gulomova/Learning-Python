"""
Schedule serializer modal
"""
from rest_framework import serializers
from performance.models import Performance
from .models import Schedule


class PerformanceSerializer(serializers.ModelSerializer):
    """
    Performance serializer
    """
    class Meta:
        model = Performance
        fields = ['pk', 'name', 'sort_description']


class ScheduleSerializer(serializers.ModelSerializer):
    """
    Schedule serializer
    """
    performance = PerformanceSerializer()

    class Meta:
        model = Schedule
        fields = ['pk', 'performance', 'date_time', 'city', 'addresses',
                  'ticket']
