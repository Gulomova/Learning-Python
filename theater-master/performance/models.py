# -*- coding: utf-8 -*-
"""
Performance models module
"""
from django.db import models
from ordered_model.models import OrderedModel

from actor.models import Actor


class Performance(OrderedModel):
    """
    Performance model
    """
    name = models.CharField(u'Название', max_length=50)
    photo_v = models.ImageField(u'Фотография', upload_to="photos/",
    help_text=u'Эта фотография будет отображаться на главной странице '
              u'(соотношение ширины и высоты: 3*2, размер не более 1mb)')
    photo_h = models.ImageField(u'Фотография', upload_to="photos/",
    help_text=u'Эта фотография будет отображаться на странице о спектакле '
              u'(соотношение ширины и высоты: 3*1, размер не более 1mb)')
    actors = models.ManyToManyField(Actor, verbose_name=u'Актеры',
                                    related_name="performance_actor")
    producer = models.ManyToManyField(Actor, verbose_name=u'Продюсер',
                                      related_name="performance_producer")
    duration = models.CharField(u'Длительность', max_length=50)
    sort_description = models.CharField(u'Краткое описание', max_length=255)
    description = models.TextField(u'Описание', )
    order = models.PositiveIntegerField(u'Порядок', editable=True,
                                        db_index=True)
    order_field_name = 'order'

    class Meta:
        ordering = ('order',)

    def __str__(self):
        """
        :return: performance name
        """
        return self.name
