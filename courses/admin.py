from django.contrib import admin

from courses.models import Course


class CoursesAdmin(admin.ModelAdmin):
    # Setting the formatting for the Courses admin page
    list_display = ('id', 'name', 'price', 'level', 'type', 'author', 'date_added')
    list_filter = ('level', 'type', 'author')

    search_fields = ('name', 'level', 'type', 'author')
    ordering = ('name',)
    filter_horizontal = ()


admin.site.register(Course, CoursesAdmin)
