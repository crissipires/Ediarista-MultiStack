from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class DiaristaCidadePagination(PageNumberPagination):
    page_size = 6

    def get_paginates_response(self,data):
        return Response({
            'quantidade_diarista':(self.page.paginator.count - self.page_size) if self.page.paginator.count > self.page_size else 0,'diarista':data
        })