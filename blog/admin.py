from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin

from blog.models import BlogPost


class BlogPostAdmin(SummernoteModelAdmin):
    exclude = ('slug',)
    list_display = ('id', 'title', 'category', 'claps', 'date_created')
    list_display_links = ('id', 'title')
    list_filter = ('category', 'date_created')

    search_fields = ('title', 'category')
    list_per_page = 20
    ordering = ('date_created',)
    filter_horizontal = ()

    summernote_fields = ('summary', 'content',)


admin.site.register(BlogPost, BlogPostAdmin)
