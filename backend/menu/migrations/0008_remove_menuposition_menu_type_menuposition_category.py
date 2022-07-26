# Generated by Django 4.0.6 on 2022-07-25 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0007_alter_menuposition_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='menuposition',
            name='menu_type',
        ),
        migrations.AddField(
            model_name='menuposition',
            name='category',
            field=models.CharField(default='Піца', max_length=10, verbose_name='Category'),
            preserve_default=False,
        ),
    ]
