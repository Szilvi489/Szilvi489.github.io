from django.shortcuts import render
from django.http import HttpResponse
from . models import Flight
from . models import Airport




def index(request):
    return render(request,"index.html",
    {
        "flights":Flight.objects.all()

    })
def flightsPage(request):
    return render(request,"flightsPage.html",
    {
         "flights":Flight.objects.all()
    })
    
