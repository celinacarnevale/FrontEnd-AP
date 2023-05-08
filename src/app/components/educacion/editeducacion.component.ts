import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent {
  educacion: Educacion = null;

  constructor(private sEducacion: SEducacionService, private activatedRouter: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(
      data =>{ this.educacion = data;
    }, err =>{
      alert('Error al modificar la educacion');
      this.router.navigate([''])
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educacion).subscribe({
      next: (data) => {
      alert('Educacion agregada');
      this.router.navigate(['']);
      },
      error: (err) => {
      alert('Fallo');
      this.router.navigate(['']);
      }
      });
  }
}
