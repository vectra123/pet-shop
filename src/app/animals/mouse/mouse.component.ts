import { IAnimal } from './../animal';
import { Component, OnInit } from '@angular/core';
import { IBreed } from '../breed';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit, IAnimal {
  type: string;
  breeds: IBreed[];

  constructor() { }

  ngOnInit() {
  }

}
