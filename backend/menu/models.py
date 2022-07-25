from django.db import models

# Create your models here.


def directory_path(instance, *args):
    return 'menu/media/{0}/{1}.png'.format(instance.category, instance.id)


class MenuPosition(models.Model):
    CATEGORIES = ['Піца', 'Салати', 'Десерти', 'Напої']

    category = models.CharField(verbose_name='Category', max_length=10)
    title = models.CharField(verbose_name='Title', max_length=100)
    description = models.TextField(verbose_name='Description')
    price = models.FloatField(verbose_name='Price')
    weight = models.IntegerField(verbose_name='Weight', blank=True)
    image = models.ImageField(verbose_name='Picture', upload_to=directory_path)
    bonus_increment = models.IntegerField(verbose_name='+Bonuses', default=0)
    is_active = models.BooleanField(verbose_name='Activity', default=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title']


