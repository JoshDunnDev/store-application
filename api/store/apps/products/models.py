from django.db import models
from django.db.models import Q

types = ['shirts', 'pants', 'shorts', 'jackets','hats', 'shoes']

class Product(models.Model):

    product_size = (
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
        ('XL', 'Extra Large'),
    )
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=200, blank=True)
    category = models.CharField(max_length=60)
    category_types = types
    price = models.DecimalField(max_digits=6, decimal_places=2)
    product_size = models.CharField(max_length=2,choices=product_size)
    product_image = models.ImageField(blank=True)
    date_created = models.DateField()