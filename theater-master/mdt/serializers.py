"""
MDT serializer modal
"""
from rest_framework import serializers
from .models import Theater


class TheaterSerializer(serializers.ModelSerializer):
    """
    Theater serializer
    """

    class Meta:
        model = Theater
        fields = ['pk', 'name', 'short_name', 'description',
                  'author_description',  'photo_1', 'photo_2', 'photo_3',
                  'photo_4', 'photo_5', 'photo_6',  'photo_7', 'photo_8',
                  'phones', 'email', 'address', 'address_name', 'ticket_window',
                  'facebook_link', 'vk_link', 'instagram_link']
