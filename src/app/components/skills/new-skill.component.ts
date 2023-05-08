import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/service/s-skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit{
  nombreSkill: string;
  porcentaje: number;

  constructor(private sSkills: SSkillsService, private router: Router){ }

  ngOnInit(): void {
  }

  onCreate(): void{
  const skills = new Skills(this.nombreSkill, this.porcentaje);
  this.sSkills.save(skills).subscribe(data => {
    alert('Skill agregada exitosamente');
    this.router.navigate([''])
  }, err => {
    alert("No se pudo guardar la skill.");
    this.router.navigate([''])
  })
  }
}
