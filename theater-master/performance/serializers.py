"""
Performance serializer modal
"""
from rest_framework import serializers
from .models import Performance
from actor.models import Actor
from schedule.models import Schedule
from datetime import datetime


class ActorSerializer(serializers.ModelSerializer):
    """
    Actor serializer
    """
    full_name = serializers.SerializerMethodField()

    def get_full_name(self, obj):
        return "{} {}".format(obj.first_name, obj.last_name)

    class Meta:
        model = Actor
        fields = ['full_name']


class PerformanceSerializer(serializers.ModelSerializer):
    """
    Performance serializer
    """
    actors = ActorSerializer(many=True)
    producer = ActorSerializer(many=True)
    schedule = serializers.SerializerMethodField()

    class Meta:
        model = Performance
        fields = ['pk', 'name', 'photo_v', 'photo_h', 'actors', 'producer',
                  'duration', 'sort_description', 'description', 'schedule']

    def get_schedule(self, obj):
        """
        Get list of the nearest performances.
        :param obj:
        :return:
        """
        schedule = Schedule.objects.filter(performance=obj,
                                           date_time__gte=datetime.now())\
            .order_by('date_time').values().first()
        if schedule:
            schedule['city'] = Schedule.CITY[schedule['city']]
        return schedule
