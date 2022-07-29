from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *
from .serializers import *


class MenuAPIView(APIView):
    def get(self, request):
        if request.query_params.get('category_id', None).isdigit():
            return Response(MenuSerializer(MenuPosition.objects.filter(category=request.query_params['category_id']).values(), many=True).data)
        return Response({'error': 'Parameter "category_id" is empty or invalid!'})


class CategoriesAPIView(APIView):
    def get(self, request):
        return Response(CategoriesSerializer(Category.objects.all().values(), many=True).data)
