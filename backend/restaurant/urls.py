from django.contrib import admin
from django.urls import path
from menu.urls import menu_urlpatterns


urlpatterns = [
    path('admin/', admin.site.urls),
    *menu_urlpatterns
]
