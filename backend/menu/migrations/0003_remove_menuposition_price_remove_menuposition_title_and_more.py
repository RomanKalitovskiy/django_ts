# Generated by Django 4.0.6 on 2022-07-25 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0002_rename_price_menuposition_price_menuposition_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='menuposition',
            name='Price',
        ),
        migrations.RemoveField(
            model_name='menuposition',
            name='Title',
        ),
        migrations.AddField(
            model_name='menuposition',
            name='description',
            field=models.TextField(default=55, verbose_name='Description'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='menuposition',
            name='image',
            field=models.ImageField(blank=True, upload_to='', verbose_name='Picture'),
        ),
        migrations.AddField(
            model_name='menuposition',
            name='price',
            field=models.FloatField(default=0, verbose_name='Price'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='menuposition',
            name='title',
            field=models.CharField(default=0, max_length=25, verbose_name='Title'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='menuposition',
            name='weight',
            field=models.IntegerField(default=0, verbose_name='Weight'),
            preserve_default=False,
        ),
    ]
