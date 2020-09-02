from rest_framework import serializers

from courses.models import Course


class CourseSerializer(serializers.ModelSerializer):
    """Get Courses Serializer"""

    class Meta:
        model = Course
        fields = ('id', 'name', 'price', 'level', 'type', 'image', 'description', 'author')


class AddCourseSerializer(serializers.ModelSerializer):
    """Add Course Serializer"""

    class Meta:
        model = Course
        fields = ('name', 'price', 'level', 'type', 'image', 'description', 'author')

    def save(self, **kwargs):
        course = Course(
            name=self.validated_data['name'],
            price=self.validated_data['price'],
            level=self.validated_data['level'],
            type=self.validated_data['type'],
            image=self.validated_data['image'],
            description=self.validated_data['description'],
            author=self.validated_data['author']
        )
        course.save()
        return course
