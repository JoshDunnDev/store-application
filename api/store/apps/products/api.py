# from rest_framework.generics import ListCreateAPIView, CreateAPIView
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend


from .serializers import ProductSerializer
from .models import Product

class ProductApi(viewsets.ModelViewSet):
    # class ProductApi(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_fields = ('category_id', 'name')
    filter_backends = (DjangoFilterBackend,)