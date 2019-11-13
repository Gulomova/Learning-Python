"""
Schedule view modal
"""
from rest_framework.generics import ListAPIView
from django_filters import rest_framework as filters

from .filters import ScheduleFilter
from .models import Schedule
from .serializers import ScheduleSerializer


class ScheduleListAPIView(ListAPIView):
    """
    Schedule
    """
    queryset = Schedule.objects.all().order_by('date_time')
    serializer_class = ScheduleSerializer
    filter_backends = (filters.DjangoFilterBackend,)

    filter_class = ScheduleFilter
