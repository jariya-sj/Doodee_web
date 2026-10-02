from django.shortcuts import render

def home(request): return render(request,'core/home.html')
def about(request): return render(request,'core/about.html')
def products(request): return render(request,'core/products.html')
def partners(request): return render(request,'core/partners.html')
def contact(request): return render(request,'core/contact.html')
