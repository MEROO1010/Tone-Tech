from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='products/') 
    # ... other fields as needed (categories, stock, etc.) 

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    # ... other fields as needed