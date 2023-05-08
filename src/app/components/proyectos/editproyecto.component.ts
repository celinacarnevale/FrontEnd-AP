import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent {
  proyectos: Proyectos = null;

  constructor(private sProyectos: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectos.detail(id).subscribe(
      data =>{ this.proyectos = data;
    }, err =>{
      alert('Error al modificar el proyecto');
      this.router.navigate([''])
    })
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectos.update(id, this.proyectos).subscribe({
      next: (data) => {
      alert('Proyecto agregado');
      this.router.navigate(['']);
      },
      error: (err) => {
      alert('Fallo');
      this.router.navigate(['']);
      }
      });
  }
}

