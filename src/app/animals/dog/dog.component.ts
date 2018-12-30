import { IAnimal } from './../animal';
import { Component, OnInit } from '@angular/core';
import { IBreed } from '../breed';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit, IAnimal {
  type: string;
  breeds: IBreed[];

  constructor() { }

  ngOnInit() {
  }

}
