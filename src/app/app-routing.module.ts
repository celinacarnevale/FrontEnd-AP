import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { EditaboutComponent } from './components/about/editabout.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editarexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editaredu/:id', component: EditeducacionComponent},
  {path: 'nuevaskill', component: NewSkillComponent},
  {path: 'editarskill/:id', component: EditSkillComponent},
  {path: 'editarabout/:id', component: EditaboutComponent},
  {path: 'nuevoproy', component: NewproyectoComponent},
  {path: 'editarproy/:id', component: EditproyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
