import { Component, OnInit } from '@angular/core';
import { Family } from '../family.model';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {
  familyArray: Family[];

  constructor() { }

  ngOnInit(): void {
    this.familyArray = [{
      id: 1,
      family_name: 'Millie'
    },
    {
      id: 2,
      family_name: 'Micky'
    },
    {
      id: 3,
      family_name: 'Panda'
    }
  ];
  }

  parentFunctionHandler(family) {
    alert('Family ' + family.id + " " + family.family_name);
  }

}
