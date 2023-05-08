import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personas } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editabout',
  templateUrl: './editabout.component.html',
  styleUrls: ['./editabout.component.css']
})
export class EditaboutComponent implements OnInit{
  personas: Personas = null;

  constructor(private activatedRouter: ActivatedRoute, private sPersona: PersonaService, private router: Router){ }
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data =>{ this.personas = data;
    }, err =>{
      alert('Error al modificar la persona');
      this.router.navigate([''])
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.update(id, this.personas).subscribe({
      next: (data) => {
      alert('Persona modificada');
      this.router.navigate(['']);
      },
      error: (err) => {
      alert('Fallo');
      this.router.navigate(['']);
      }
      });
  }
}
