import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit{
  nombreProy: string;
  descripcionProy: string;
  link: string;
  fecha: string;

  constructor(private sProyectos: ProyectosService, private router: Router){ }

  ngOnInit(): void {
  }

  onCreate(): void{
  const proyectos = new Proyectos(this.nombreProy, this.descripcionProy, this.link, this.fecha);
  this.sProyectos.save(proyectos).subscribe(data => {
    alert('Proyecto agregado exitosamente');
    this.router.navigate([''])
  }, err => {
    alert("No se pudo guardar el proyecto.");
    this.router.navigate([''])
  })
  }
}
