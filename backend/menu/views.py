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
            position['image'] = f'{request.get_host()}/api/menu/position/image/{position["id"]}/'
        return Response(MenuSerializer(positions, many=True).data)


class CategoriesAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all().values()
        for category in categories:
            category['icon'] = f'{request.get_host()}/api/menu/category/icon/{category["id"]}/'
        serializer = CategoriesSerializer(categories, many=True)
        return Response(serializer.data)


def image_directory_path(instance, filename):
    return f'menu/media/{instance.category}/{filename}'


def icon_directory_path(_, filename):
    return f'menu/media/icons/{filename}'


class CategoriesIconAPIView(APIView):
    def get(self, request, category_id):
        icon = Category.objects.get(id=category_id).icon.open("rb")
        print(Category.objects.get(id=category_id).icon.url)
        response = HttpResponse(icon, content_type='application')
        return response


class MenuPositipnImageAPIView(APIView):
    def get(self, request, position_id):
        image = MenuPosition.objects.get(id=position_id).image.open("rb")
        response = HttpResponse(image, content_type='application')
        return response
