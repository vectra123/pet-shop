import { AnimalsRoutingModule } from './animals-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { MouseComponent } from './mouse/mouse.component';

@NgModule({
  declarations: [DogComponent, CatComponent, MouseComponent],
  imports: [
    CommonModule,
    AnimalsRoutingModule
  ]
})
export class AnimalsModule { }
