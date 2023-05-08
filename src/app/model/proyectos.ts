export class Proyectos {
  id? : number;
  nombreProy: string;
  descripcionProy: string;
  link: string;
  fecha: string;


  constructor(nombreProy:string, descripcionProy: string, link: string, fecha: string){
    this.nombreProy = nombreProy;
    this.descripcionProy = descripcionProy;
    this.link = link;
    this.fecha = fecha;
  }
}
