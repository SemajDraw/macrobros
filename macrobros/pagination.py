from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class CustomPagination(PageNumberPagination):

    def get_paginated_response(self, data):
        return Response({
            'total_items': self.page.paginator.count,
            'total_pages': self.page.paginator.num_pages,
            'page_number': self.page.number,
            'next_page_number': self.page.next_page_number() if self.get_next_link() else None,
            'previous_page_number': self.page.previous_page_number() if self.get_previous_link() else None,
            'results': data
        })
