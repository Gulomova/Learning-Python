"""
Performance urls modal
"""
from django.conf.urls import url
from performance.views import PerformanceListAPIView, \
    PerformanceRetrieveAPIView


urlpatterns = [
    url(r'^$', PerformanceListAPIView.as_view(), name='performances_list'),
    url(r'^(?P<pk>[0-9]+)/$', PerformanceRetrieveAPIView.as_view(),
        name='performance_detail')
]
