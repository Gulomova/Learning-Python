"""
MDT urls modal
"""
from django.conf.urls import url
from mdt.views import TheaterListAPIView


urlpatterns = [
    url(r'^$', TheaterListAPIView.as_view(), name='theater'),
]
