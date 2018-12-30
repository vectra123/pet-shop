import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MouseComponent } from './mouse/mouse.component';

const routes: Routes = [
  { path: "animals/cats", component: CatComponent},
  { path: "animals/dogs", component: DogComponent},
  { path: "animals/mice", component: MouseComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }