"""
Schedule admin module
"""
from django.contrib import admin

from .models import Schedule


class ScheduleAdmin(admin.ModelAdmin):
    """
    Schedule admin
    """
    fields = ('performance', 'date_time', 'city', 'addresses', 'ticket')
    list_display = ('performance', 'date_time')
    list_filter = ['performance']
    search_fields = ['performance']


admin.site.register(Schedule, ScheduleAdmin)
