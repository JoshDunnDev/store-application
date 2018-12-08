from django.test import TestCase

from model_mommy import mommy


class TestProduct(TestCase):
    def setUp(self):
        self.models = mommy.make('products.Product')
    
    def test_str(self):
        self.assertEquals(str(self.models), self.models.name)


class TestCategory(TestCase):
    def setUp(self):
        self.models = mommy.make('products.Category')
    
    def test_str(self):
        self.assertEquals(str(self.models), self.models.name)
 
class TestBrand(TestCase):
    def setUp(self):
        self.models = mommy.make('products.Brand')
    
    def test_str(self):
        self.assertEquals(str(self.models), self.models.name)
