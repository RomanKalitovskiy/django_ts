from django.db import models
from django.utils.safestring import mark_safe


def directory_path(instance, filename):
    return 'backend/menu/media/{0}/{1}'.format(instance.category, filename)


class Category(models.Model):
    category = models.CharField(verbose_name='Category', max_length=10)

    def __str__(self):
        return self.category

    class Meta:
        verbose_name_plural = 'Categories'


class MenuPosition(models.Model):
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    title = models.CharField(verbose_name='Title', max_length=100)
    description = models.TextField(verbose_name='Description')
    price = models.FloatField(verbose_name='Price')
    weight = models.IntegerField(verbose_name='Weight', blank=True)
    image = models.ImageField(verbose_name='Picture', upload_to=directory_path)
    bonus_increment = models.IntegerField(verbose_name='+Bonuses', default=0)
    is_active = models.BooleanField(verbose_name='Activity', default=True)

    def __str__(self):
        return self.title


