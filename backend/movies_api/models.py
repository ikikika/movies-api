from django.db import models


class Movie(models.Model):
    """Database model for movies"""
    title = models.CharField(max_length=255)
    description = models.TextField()
    programType = models.CharField(max_length=255)
    releaseYear = models.PositiveIntegerField()
    imagesUrl = models.CharField(max_length=255)
    imagesWidth = models.PositiveIntegerField()
    imagesHeight = models.PositiveIntegerField()

    def get_title(self):
        """Retrieve title of movie"""
        return self.title

    def get_programType(self):
        """Retrieve programType of movie"""
        return self.programType

    def get_releaseYear(self):
        """Retrieve releaseYear of movie"""
        return self.releaseYear
