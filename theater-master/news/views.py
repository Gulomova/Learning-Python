"""
News view modal
"""
from rest_framework.generics import ListAPIView

from .models import News
from .serializers import NewsSerializer


class NewsListAPIView(ListAPIView):
    """
    New list
    """
    queryset = News.objects.all()
    serializer_class = NewsSerializer
