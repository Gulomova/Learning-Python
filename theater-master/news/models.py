"""
News models module
"""
from django.db import models


class News(models.Model):
    """
    News model
    """
    title = models.CharField(max_length=255)
    date_time = models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    phone = models.CharField(max_length=13)

    def __str__(self):
        """
        :return: News
        """
        return self.title
