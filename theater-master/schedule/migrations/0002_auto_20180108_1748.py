# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-01-08 17:48
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('schedule', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='schedule',
            name='place',
        ),
        migrations.AddField(
            model_name='schedule',
            name='addresses',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Адрес'),
        ),
        migrations.AddField(
            model_name='schedule',
            name='city',
            field=models.CharField(choices=[('KH', 'Харьков'), ('O', 'Одесса')], default='KH', max_length=15, verbose_name='Город'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='date_time',
            field=models.DateTimeField(verbose_name='Дата и Время'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='performance',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='performance.Performance', verbose_name='Спектакль'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='ticket',
            field=models.URLField(verbose_name='Билеты'),
        ),
    ]
