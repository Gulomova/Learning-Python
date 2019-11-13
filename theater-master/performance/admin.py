"""
Performance admin module
"""
from django.contrib import admin
from ordered_model.admin import OrderedModelAdmin

from .models import Performance


class PerformanceAdmin(OrderedModelAdmin):
    """
    Performance admin
    """
    fields = ('name', 'photo_v', 'photo_h', 'actors', 'producer', 'duration',
              'sort_description', 'description')
    list_display = ('name', 'sort_description', 'duration', 'order',
                    'move_up_down_links')
    list_editable = ('order',)
    search_fields = ['name']


admin.site.register(Performance, PerformanceAdmin)
