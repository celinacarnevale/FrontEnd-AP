import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent {
  constructor(private router:Router) { }

  ngOnInit(): void{
  }

  login(){
    this.router.navigate(['/login'])
  }
}
