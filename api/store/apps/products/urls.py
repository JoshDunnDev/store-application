from django.urls import path
from .views import get_products
from .api import ProductApi


urlpatterns = [
    path(r'products/', ProductApi.as_view()),
    #path(r'products/(?P<id>\d+/$', product_by_id),
]