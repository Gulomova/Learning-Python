"""
News urls modal
"""
from django.conf.urls import url
from news.views import NewsListAPIView


urlpatterns = [
    url(r'^$', NewsListAPIView.as_view(), name='news_list'),
]
