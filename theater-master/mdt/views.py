"""
MDT view modal
"""
from rest_framework import generics

from .models import Theater
from .serializers import TheaterSerializer


class TheaterListAPIView(generics.ListAPIView):
    """
    Get information about theater.
    """
    queryset = Theater.objects.filter().order_by('pk')
    serializer_class = TheaterSerializer
