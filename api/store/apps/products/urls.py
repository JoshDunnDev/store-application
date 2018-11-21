from django.urls import path
from .views import get_products


urlpatterns = [
    path(r'products/', get_products)
]