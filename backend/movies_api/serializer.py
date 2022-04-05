from rest_framework import serializers

from movies_api import models


class MovieSerializer(serializers.ModelSerializer):
    """Serializes a movie object"""

    class Meta:
        model = models.Movie
        fields = ('id', 'title', 'description', 'programType',
                  'releaseYear', 'imagesUrl', 'imagesWidth', 'imagesHeight')
