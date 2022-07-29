# Generated by Django 4.0.6 on 2022-07-27 19:05

from django.db import migrations, models
import menu.models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0013_menuposition_icon'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menuposition',
            name='icon',
            field=models.FileField(upload_to=menu.models.icon_directory_path, verbose_name='Icon'),
        ),
    ]