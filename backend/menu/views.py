from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import MenuPosition
from .serializers import MenuSerializer


class MenuAPIView(APIView):
    def get(self, request):
        positions = []
        for category in MenuPosition.CATEGORIES:
            positions.append(
                {
                    'category': category,
                    'results': MenuSerializer(MenuPosition.objects.filter(category=category).values(), many=True).data
                }
            )
        return Response(positions)
