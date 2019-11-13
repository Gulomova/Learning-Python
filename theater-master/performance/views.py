"""
Performance view modal
"""
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Performance
from .serializers import PerformanceSerializer


class PerformanceListAPIView(ListAPIView):
    """
    Performances list
    """
    queryset = Performance.objects.all()
    serializer_class = PerformanceSerializer


class PerformanceRetrieveAPIView(RetrieveAPIView):
    """
    Get information about performance
    """
    queryset = Performance.objects.all()
    serializer_class = PerformanceSerializer
