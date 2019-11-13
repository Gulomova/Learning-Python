"""
Actor view modal
"""
from rest_framework.generics import ListAPIView

from .models import Actor
from .serializers import ActorSerializer


class ActorListAPIView(ListAPIView):
    """
    Actors list
    """
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer
