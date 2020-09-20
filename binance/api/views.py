import os
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView


class BinanceDetailView(GenericAPIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, *args, **kwargs):
        return Response({
            'key': os.getenv('BINANCE_KEY'),
            'secret': os.getenv('BINANCE_SECRET')
        }, status=status.HTTP_200_OK)

