from django.db import models
from django.db.models import Q

category_types = ['shirts', 'pants', 'hats', 'shoes']

class Product(models.Model):

    name = models.CharField(max_length=40, blank=True)
    description = models.CharField(max_length=200, blank=True)
    category = models.CharField(max_length=60, blank=False)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    product_size = models.CharField(max_length=60, blank=False)
    product_image = models.ImageField(blank=False, null=True)
    date_created = models.DateField()