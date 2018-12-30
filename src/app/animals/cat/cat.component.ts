import { IBreed } from './../breed';
import { IAnimal } from './../animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit, IAnimal {
  type: string;
  breeds: IBreed[];

  constructor() { }

  ngOnInit() {
  }

}