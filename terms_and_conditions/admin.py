from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin

from .models import TermsAndConditions


class TermsAndConditionsAdmin(SummernoteModelAdmin):
    list_display = ('id', 'title')
    list_display_links = ('id', 'title')
    list_filter = ('title',)

    search_fields = ('title',)
    list_per_page = 20
    filter_horizontal = ()

    summernote_fields = ('content',)


admin.site.register(TermsAndConditions, TermsAndConditionsAdmin)
