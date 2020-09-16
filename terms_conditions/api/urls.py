from django.urls import path
from terms_conditions.api.views import TermsConditionsDetailView

urlpatterns = [
    path('<slug>', TermsConditionsDetailView.as_view()),
]
