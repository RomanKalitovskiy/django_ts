from django.db import models
from django.utils.safestring import mark_safe


def image_directory_path(instance, filename):
    return f'menu/media/{instance.category}/{filename}'


def icon_directory_path(_, filename):
    return f'menu/media/icons/{filename}'


class Category(models.Model):
    category = models.CharField(verbose_name='Category', max_length=16)
    icon = models.FileField(verbose_name='Icon', blank=True, upload_to=icon_directory_path)
    url = models.CharField(verbose_name='Url', max_length=16, default='')
    def __str__(self):
        return self.category

    class Meta:
        verbose_name_plural = 'Categories'


class MenuPosition(models.Model):
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    title = models.CharField(verbose_name='Title', max_length=100)
    description = models.TextField(verbose_name='Description')
    price = models.FloatField(verbose_name='Price')
    weight = models.IntegerField(verbose_name='Weight')
    image = models.ImageField(verbose_name='Picture', blank=True, upload_to=image_directory_path)
    bonus_increment = models.IntegerField(verbose_name='+Bonuses', default=0)
    is_active = models.BooleanField(verbose_name='Activity', default=True)

    def __str__(self):
        return self.title


