"""
News admin module
"""
from django.contrib import admin

from .models import News


class NewsAdmin(admin.ModelAdmin):
    """
    News admin
    """
    fields = ('title', 'description', 'phone')
    list_display = ('title', 'date_time')
    list_filter = ['title', 'date_time']
    search_fields = ['title']


admin.site.register(News, NewsAdmin)
