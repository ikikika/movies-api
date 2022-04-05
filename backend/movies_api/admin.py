from django.contrib import admin
from django.urls import path
from django.shortcuts import render
from django import forms
from django.contrib import messages
from django.http import HttpResponseRedirect
from django.urls import reverse
import re
from csv import reader
from movies_api import models


class CsvImportForm(forms.Form):
    csv_upload = forms.FileField()


class MovieAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'programType',
                    'releaseYear', 'imagesUrl', 'imagesWidth', 'imagesHeight')

    def get_urls(self):
        urls = super().get_urls()
        new_urls = [path('upload-csv/', self.upload_csv), ]
        return new_urls + urls

    def upload_csv(self, request):

        if request.method == "POST":
            csv_file = request.FILES["csv_upload"]

            if not csv_file.name.endswith('.csv'):
                messages.warning(request, 'The wrong file type was uploaded')
                return HttpResponseRedirect(request.path_info)

            file_data = csv_file.read().decode("utf-8")
            csv_data = file_data.split("\n")

            firstline = True
            for x in csv_data:
                if firstline:  # skip first line
                    firstline = False
                    continue

                fields = ['{}'.format(y) for y in list(
                    reader([x], delimiter=',', quotechar='"'))[0]]
                created = models.Movie.objects.update_or_create(
                    id=fields[0],
                    title=fields[1],
                    description=fields[2],
                    programType=fields[3],
                    releaseYear=fields[4],
                    imagesUrl=fields[5],
                    imagesWidth=fields[6],
                    imagesHeight=fields[7],
                )

            url = reverse('admin:index')
            return HttpResponseRedirect(url)

        form = CsvImportForm()
        data = {"form": form}
        return render(request, "admin/csv_upload.html", data)


admin.site.register(models.Movie, MovieAdmin)
