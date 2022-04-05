from rest_framework import viewsets
from rest_framework import filters

from movies_api import serializers
from movies_api import models


class MoviesViewSet(viewsets.ModelViewSet):  # ModelViewSet need queryset
    """Handle querying profiles"""
    serializer_class = serializers.MovieSerializer
    queryset = models.Movie.objects.all().order_by('title')
    filter_backends = (filters.SearchFilter,)
    search_fields = ('title',)
