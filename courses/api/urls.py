from django.urls import re_path

from .views import AddCourse, AllCourses

urlpatterns = [
    re_path('add_course', AddCourse.as_view(), name='add_course'),
    re_path('all_courses', AllCourses.as_view(), name='all_course')
]
