import { Component, OnInit } from '@angular/core';
import { faces, IProducts1 } from '../products1';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = "Faces List";
  constructor() { }

faces = faces;

  ngOnInit(): void {
  }

}
