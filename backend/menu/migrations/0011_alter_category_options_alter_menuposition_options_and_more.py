# Generated by Django 4.0.6 on 2022-07-27 18:57

from django.db import migrations, models
import menu.models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0010_alter_category_category_alter_menuposition_category'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name_plural': 'Categories'},
        ),
        migrations.AlterModelOptions(
            name='menuposition',
            options={},
        ),
        migrations.AddField(
            model_name='menuposition',
            name='icon',
            field=models.ImageField(default='/', upload_to=menu.models.icon_directory_path, verbose_name='Icon'),
            preserve_default=False,
        ),
    ]