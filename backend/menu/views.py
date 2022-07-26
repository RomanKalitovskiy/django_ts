from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import MenuPosition, Category
from .serializers import MenuSerializer


class MenuAPIView(APIView):
    def get(self, request):
        positions = []
        for category in Category.objects.all():
            positions.append(
                {
                    'category': category.category,
                    'results': MenuSerializer(MenuPosition.objects.filter(category=category.id).values(), many=True).data
                }
            )
        return Response(positions)
