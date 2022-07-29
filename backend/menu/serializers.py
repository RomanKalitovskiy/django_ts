from rest_framework import serializers

from .models import *


class MenuSerializer(serializers.ModelSerializer):
    image = serializers.CharField()
    icon = serializers.CharField()

    class Meta:
        model = MenuPosition
        fields = ('title', 'description', 'price', 'weight', 'image', 'icon', 'bonus_increment', 'is_active')


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
