"""
Schedule urls modal
"""
from django.conf.urls import url
from schedule.views import ScheduleListAPIView


urlpatterns = [
    url(r'^$', ScheduleListAPIView.as_view(), name='schedule'),
]
