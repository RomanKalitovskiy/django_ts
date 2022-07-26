from rest_framework import serializers


class MenuSerializer(serializers.Serializer):
    title = serializers.CharField()
    description = serializers.CharField()
    price = serializers.FloatField()
    weight = serializers.IntegerField()
    image = serializers.CharField()
    bonus_increment = serializers.IntegerField()
    is_active = serializers.BooleanField()