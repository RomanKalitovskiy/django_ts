from django.contrib import admin
from .models import *

# Register your models here.


class MenuAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category', 'description', 'price', 'weight', 'bonus_increment', 'image',
                    'is_active')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    list_editable = ('is_active',)
    list_filter = ('category', 'is_active')


admin.site.register(MenuPosition, MenuAdmin)
