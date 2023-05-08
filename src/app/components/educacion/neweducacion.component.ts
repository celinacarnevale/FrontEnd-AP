import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit{
  nombreEdu: string = ''
  descripcionEdu: string = ''

  constructor(private sEducacion: SEducacionService, private router: Router){ }

  ngOnInit(): void {

  }

  onCreate(): void{
  const exp = new Educacion(this.nombreEdu, this.descripcionEdu);
  this.sEducacion.save(exp).subscribe(data => {
    alert('Educacion agregada exitosamente');
    this.router.navigate([''])
  }, err => {
    alert("No se pudo guardar la educacion.");
    this.router.navigate([''])
  })
  }
}
