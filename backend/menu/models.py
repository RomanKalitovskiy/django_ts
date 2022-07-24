from django.db import models

# Create your models here.


class MenuPosition(models.Model):
    title = models.CharField(name='Title', max_length=25)
    price = models.FloatField(name='Price')

    # def __str__(self):
    #     return self.title




