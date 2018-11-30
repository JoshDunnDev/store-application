from django.db import models
from django.db.models import Q
from django.urls import reverse

# Currently not adding brands to the application. Maybe add in future release 
# class Brand(models.Model):
#     name = models.CharField(max_length=150, db_index=True)  
#     slug = models.SlugField(max_length=150, unique=True, db_index=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     class Meta:
#         ordering = ('name', )
#         verbose_name ='Brand Name'

#     def __str__(self):
#         return self.name

#     def get_absolute_url(self):
#         return reverse('store:product_list_by_brand', args=[self.slug])


# types = ['shirts', 'pants', 'shorts', 'jackets','hats', 'shoes']
class Category(models.Model):
    name = models.CharField(max_length=150, db_index=True)  
    slug = models.SlugField(max_length=150, unique=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('name', )
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('store:product_list_by_category', args=[self.slug])

class Product(models.Model):
    # Currently not using brand (might add in a future release)
    # brand = models.ForeignKey(Brand, related_name='products', on_delete=models.CASCADE)
    product_size = (
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
        ('XL', 'Extra Large'),
    )
    # might not need slug given will use id for /api/
    # slug = models.SlugField(max_length=100, db_index=True)
    name = models.CharField(max_length=60)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    product_size = models.CharField(max_length=2,choices=product_size)
    product_image = models.ImageField(blank=True)
    available = models.BooleanField(default=True)
    stock = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
            return self.name

    def get_absolute_url(self):
        return reverse('store:product_detail', args=[self.slug, self.id])