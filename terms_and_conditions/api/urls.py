from django.urls import path
from terms_and_conditions.api.views import TermsConditionsDetailView

urlpatterns = [
    path('<slug>', TermsConditionsDetailView.as_view()),
]
