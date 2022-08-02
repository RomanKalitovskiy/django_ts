from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import CategoriesAPIView, CategoriesIconAPIView, MenuAPIView, MenuPositipnImageAPIView

menu_urlpatterns = [
    path('api/menu/categories/', CategoriesAPIView.as_view()),
    path('api/menu/category/icon/<int:category_id>/',
         CategoriesIconAPIView.as_view()),
    path('api/menu/positions/<int:category_id>/', MenuAPIView.as_view()),
    path('api/menu/position/image/<int:position_id>/',
         MenuPositipnImageAPIView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
