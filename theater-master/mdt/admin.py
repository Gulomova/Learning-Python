"""
MDT admin module
"""
from django.contrib import admin
from .models import Theater


class TheaterAdmin(admin.ModelAdmin):
    """
    Theater admin
    """
    fieldsets = (
        (u'Основная информация',
         {'fields': ('name', 'short_name', 'description', 'author_description')}),
        (u'Фотографии (соотношение ширины и высоты: 3*2, размер не более 1mb)',
         {'fields': (('photo_1', 'photo_2'), ('photo_3', 'photo_4'),
                     ('photo_5', 'photo_6'), ('photo_7', 'photo_8'))}),
        (u'Контактная информация',
         {'fields': ('phones', 'email', 'address', 'address_name',
                     'ticket_window')}),
        (u'Cоцсети',
         {'fields': ('facebook_link', 'vk_link', 'instagram_link')})
    )
    list_display = ('name', 'email')

admin.site.register(Theater, TheaterAdmin)
