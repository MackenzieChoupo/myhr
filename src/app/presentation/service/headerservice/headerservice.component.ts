import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerservice',
  templateUrl: './headerservice.component.html',
  styleUrls: ['./headerservice.component.css']
})
export class HeaderserviceComponent implements OnInit {
  mode:number=1;
  constructor() { }

  ngOnInit() {
  }

}
