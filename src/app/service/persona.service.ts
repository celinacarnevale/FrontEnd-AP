import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personas } from '../model/persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'https://backend-portfolio-ukvc.onrender.com/personas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Personas[]>{
    return this.httpClient.get<Personas[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Personas>{
    return this.httpClient.get<Personas>(this.URL + `detail/${id}`);
  }

  public update(id: number, personas: Personas): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, personas);
  }
}
