from rest_framework.generics import ListCreateAPIView, CreateAPIView
from django_filters.rest_framework import DjangoFilterBackend


from .serializers import ProductSerializer
from .models import Product

class ProductApi(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_fields = ('category', 'name')
    filter_backends = (DjangoFilterBackend,)