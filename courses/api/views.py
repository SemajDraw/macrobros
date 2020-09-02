from rest_framework import status, permissions, generics
from rest_framework.response import Response

from .serializers import AddCourseSerializer, CourseSerializer
from ..models import Course


class AllCourses(generics.GenericAPIView):
    """Get All Courses View"""

    def get(self, request, *args, **kwargs):
        serializer = CourseSerializer(Course.objects.all(), many=True)
        try:
            return Response(
                serializer.data,
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(e.args, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class AddCourse(generics.GenericAPIView):
    """Add New Course View"""

    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]
    serializer_class = AddCourseSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            course = serializer.save()
            return Response({
                'note': 'Course successfully added',
                'new_course': AddCourseSerializer(course, context=self.get_serializer_context()).data,
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
