# Generated by Django 4.0.6 on 2022-07-25 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0004_alter_menuposition_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='menuposition',
            name='is_active',
            field=models.BooleanField(default=True, verbose_name='Activity'),
        ),
        migrations.AlterField(
            model_name='menuposition',
            name='weight',
            field=models.IntegerField(blank=True, verbose_name='Weight'),
        ),
    ]
