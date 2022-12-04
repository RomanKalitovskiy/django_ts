from rest_framework import serializers

from .models import *


class MenuSerializer(serializers.ModelSerializer):
    image = serializers.CharField()

    class Meta:
        model = MenuPosition
        fields = ('id', 'title', 'description', 'price', 'weight',
                  'image', 'bonus_increment', 'is_active')


class CategoriesSerializer(serializers.ModelSerializer):
    icon = serializers.CharField()

    class Meta:
        model = Category
        fields = '__all__'
