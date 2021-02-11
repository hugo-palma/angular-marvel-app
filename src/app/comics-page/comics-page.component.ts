import { Component, OnInit } from '@angular/core';
import { Comics } from '../types/stories/Comics';

@Component({
  selector: 'app-comics-page',
  templateUrl: './comics-page.component.html',
  styleUrls: ['./comics-page.component.css']
})
export class ComicsPageComponent implements OnInit {
  comics: Comics[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
