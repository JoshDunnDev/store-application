from django.shortcuts import render, get_object_or_404
from django.core import serializers
from django.http import HttpResponse
from store.apps.products.models import Product
from django.http import JsonResponse

# Create your views here.
def get_products(request):
    products = serializers.serialize('json',Product.objects.all())
    return HttpResponse(products, content_type="application/json")

#example view function for product/<id>/ endpoint
# def product_by_id(request, id):
#     product = get_object_or_404(Product, pk=id)
