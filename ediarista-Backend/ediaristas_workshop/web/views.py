from django.shortcuts import render, redirect
from .forms import form_diarista
from .models import Diaristas
# Create your views here.

def cadastrar_diarista(request):
    if request.method == 'POST':
        diarista_form = form_diarista.DiaristaForm(request.POST, request.FILES)
        if diarista_form.is_valid():
            diarista_form.save()
            return redirect('listar_diaristas')
    else:
        diarista_form = form_diarista.DiaristaForm()
    return render(request, 'form_diarista.html', {'diarista_form': diarista_form})


def listar_diaristas(request):
    diaristas = Diaristas.objects.all()
    return render(request,'listas_diaristas.html',{'diaristas':diaristas})

def editar_diarista(request, diarista_id):
    diarista = Diaristas.objects.get(id=diarista_id)
    if request.method == 'POST':
        diarista_form = form_diarista.DiaristaForm(request.POST or None, request.FILES, instance=diarista)
        if diarista_form.is_valid():
            diarista_form.save()
            return redirect('listar_diaristas')
    else:
        diarista_form = form_diarista.DiaristaForm(instance=diarista)
    return render(request,'form_diarista.html', {'diarista_form':diarista_form})

def remover_diarista(request, diarista_id):
    diarista = Diaristas.objects.get(id=diarista_id)
    diarista.delete()
    return redirect('listar_diaristas')