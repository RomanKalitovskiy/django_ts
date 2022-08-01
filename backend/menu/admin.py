from django.contrib import admin
from .models import *

# Register your models here.


class MenuAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category', 'description', 'price', 'weight', 'bonus_increment', 'image',
                    'is_active',)
    list_display_links = ('id', 'title',)
    search_fields = ('title',)
    list_editable = ('is_active',)
    list_filter = ('category', 'is_active',)
    # readonly_fields = ('get_html_image',)
    #
    # def get_html_image(self, object):
    #     return mark_safe(f"<img src={object.image} width=50>")
    #
    # get_html_image.short_description = 'Image'


admin.site.register(MenuPosition, MenuAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'category', 'icon',)
    list_display_links = ('category',)
    search_fields = ('category',)


admin.site.register(Category, CategoryAdmin)
