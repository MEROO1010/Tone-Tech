from django.urls import path
from . import views  # Assuming 'views.py' is your views module

urlpatterns = [
    path('', views.index, name='index'),  # Default URL pattern
    path('products/', views.products, name='products'),
    # ... other URL patterns
]
