# -*- coding: utf-8 -*-
"""
MDT models module
"""
from django.db import models
from django.contrib.postgres.fields import ArrayField


class Theater(models.Model):
    """
    Theater model
    """
    name = models.CharField(u'Название', max_length=50)
    short_name = models.CharField(u'Краткое название', max_length=50)
    description = models.TextField(u'О театре')
    author_description = models.TextField(u'Режиссер театра Алексей Райт')
    photo_1 = models.ImageField(u'Фотография 1', upload_to='theater/')
    photo_2 = models.ImageField(u'Фотография 2', upload_to='theater/')
    photo_3 = models.ImageField(u'Фотография 3', upload_to='theater/')
    photo_4 = models.ImageField(u'Фотография 4', upload_to='theater/')
    photo_5 = models.ImageField(u'Фотография 5', upload_to='theater/')
    photo_6 = models.ImageField(u'Фотография 6', upload_to='theater/')
    photo_7 = models.ImageField(u'Фотография 7', upload_to='theater/')
    photo_8 = models.ImageField(u'Фотография 8', upload_to='theater/')
    phones = ArrayField(models.CharField(u'Телефон', max_length=15),)
    email = models.EmailField('Email')
    address = models.CharField(u'Адрес', max_length=55)
    address_name = models.CharField(u'Название здания', max_length=55)
    ticket_window = models.CharField(u'Касса работает', max_length=55)
    facebook_link = models.URLField('Facebook', max_length=55)
    vk_link = models.URLField('Vk', max_length=55)
    instagram_link = models.URLField('Instagram', max_length=55)

    def __str__(self):
        """
        :return: theater
        """
        return '{}'.format(self.name)
