from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import CategoriesAPIView, MenuAPIView

menu_urlpatterns = [
    path('api/menu/categories/', CategoriesAPIView.as_view()),
    path('api/menu/positions/<int:category_id>/', MenuAPIView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
