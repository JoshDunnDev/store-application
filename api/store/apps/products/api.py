from rest_framework.generics import ListCreateAPIView, CreateAPIView

from .serializers import ProductSerializer
from .models import Product

class ProductApi(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer