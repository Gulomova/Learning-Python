# -*- coding: utf-8 -*-
"""
Schedule models module
"""
from django.db import models
from performance.models import Performance


class Schedule(models.Model):
    """
    Schedule model
    """
    CITY = {"KH": u'Харьков',
            "O": u'Одесса'}
    TYPE_CITY = ()
    for city in CITY.keys():
        TYPE_CITY += ((city, CITY[city]), )
    performance = models.ForeignKey(Performance, verbose_name=u'Спектакль')
    date_time = models.DateTimeField(u'Дата и Время')
    city = models.CharField(u'Город', choices=TYPE_CITY,
                            default="KH", max_length=15)
    addresses = models.CharField(u'Адрес', null=True, blank=True, max_length=255)
    ticket = models.URLField(u'Билеты')

    def __str__(self):
        """
        :return: performance name
        """
        return self.performance.name
