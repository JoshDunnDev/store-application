
from django.db import models


class Product():

    name = models.CharField(max_length=40, blank=True)
    description = models.CharField(max_length=200, blank=True)