"""
Schedule filters modal
"""
import django_filters
from .models import Schedule


class ScheduleFilter(django_filters.FilterSet):
    date_since = django_filters.DateTimeFilter(name="date_time", lookup_expr='gte')
    date_before = django_filters.DateTimeFilter(name="date_time", lookup_expr='lte')

    class Meta:
        model = Schedule
        fields = ['date_since', 'date_before', 'city']
