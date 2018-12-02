from rest_framework import serializers

from .models import Product, Category

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        queryset = Product.objects.all()
        model = Product
        # fields = ('tracks', 'name', 'description' )
        exclude = ('stock', 'brand')
    
    def to_representation(self, obj):
        serialized_data = super(ProductSerializer, self).to_representation(obj) # original serialized data
        category_id = serialized_data.get('category') # get job category id from original serialized data
        category_name = Category.objects.get(id=category_id) # get the object from db
        serialized_data['category_name'] = category_name.name # replace id with category name
        return serialized_data # return modified serialized data