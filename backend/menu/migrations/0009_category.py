# Generated by Django 4.0.6 on 2022-07-26 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0008_remove_menuposition_menu_type_menuposition_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(db_index=True, max_length=10, verbose_name='Category')),
            ],
        ),
    ]
