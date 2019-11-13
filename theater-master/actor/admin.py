"""
Actor admin module
"""
from django.contrib import admin
from ordered_model.admin import OrderedModelAdmin

from actor.models import Actor


class ActorAdmin(OrderedModelAdmin):
    """
    Actor admin
    """
    fields = ('first_name', 'last_name', 'photo', 'position')
    list_display = ('first_name', 'last_name', 'photo', 'position', 'order',
                    'move_up_down_links')
    list_editable = ('order',)
    search_fields = ['first_name', 'last_name']


admin.site.register(Actor, ActorAdmin)
