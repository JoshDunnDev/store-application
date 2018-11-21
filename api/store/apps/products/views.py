from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse
from store.apps.products.models import Product
from django.http import JsonResponse

# Create your views here.
def get_products(request):
    products = serializers.serialize('json',Product.objects.all())
    return HttpResponse(products, content_type="application/json")