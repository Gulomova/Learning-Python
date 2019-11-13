# -*- coding: utf-8 -*-
"""
Actor models module
"""
from django.db import models
from ordered_model.models import OrderedModel


class Actor(OrderedModel):
    """
    Actor model
    """
    first_name = models.CharField(u'Имя', max_length=50)
    last_name = models.CharField(u'Фамилия', max_length=50)
    position = models.CharField(u'Должность', max_length=50, null=True,
    blank=True, help_text=u'Это поле не обязательное')
    photo = models.ImageField(u'Фотография', upload_to='photos/',
    help_text=u'(соотношение ширины и высоты: 3*2, размер не более 1mb)')
    order = models.PositiveIntegerField(u'Порядок', editable=True,
                                        db_index=True)

    order_field_name = 'order'

    class Meta:
        ordering = ('order',)

    def __str__(self):
        """
        :return: actor full name
        """
        return '{} {}'.format(self.first_name, self.last_name)
