import { IAnimal } from './../animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit, IAnimal {
  type: string;
  breeds: string[];

  constructor() { }

  ngOnInit() {
  }

}
