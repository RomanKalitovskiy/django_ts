from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *


class MenuAPIView(APIView):
    def get(self, request, category_id):
        positions = MenuPosition.objects.filter(category=category_id).values()
        for position in positions:
            position['image'] = f'http://{request.get_host()}/media/{position["image"]}'
        return Response(MenuSerializer(positions, many=True).data)


class CategoriesAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all().values()
        for category in categories:
            category['icon'] = f'http://{request.get_host()}/media/{category["icon"]}'
        serializer = CategoriesSerializer(categories, many=True)
        return Response(serializer.data)
