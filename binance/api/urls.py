from django.urls import path
from .views import BinanceDetailView

urlpatterns = [
    path('', BinanceDetailView.as_view()),
]
