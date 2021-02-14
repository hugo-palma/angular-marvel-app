import { Component, OnInit } from '@angular/core';
import IResult from '../types/IResults';
import response from '../fakeData';
import IData from '../types/IData';
@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css']
})
export class CharactersPageComponent implements OnInit {
  data: IData;
  results: IResult[];

  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(response.data)
    this.results = this.data.results;
    console.log(this.results);
  }
}
