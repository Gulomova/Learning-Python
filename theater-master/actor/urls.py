"""
Actor urls modal
"""
from django.conf.urls import url
from actor.views import ActorListAPIView


urlpatterns = [
    url(r'^$', ActorListAPIView.as_view(), name='actors_list')
]
