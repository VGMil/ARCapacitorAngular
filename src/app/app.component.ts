import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    var sceneEl = document.querySelector('a-scene');
    
  }
}
