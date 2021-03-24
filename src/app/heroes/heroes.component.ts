import { Component, OnInit } from '@angular/core';

// import hero interface (hero.ts)
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero = 'windstorm';
  
  // refactor the component's hero property to be of type Hero
  // initialize it with an id of 1 and the name Windstorm
   hero: Hero = {
   id: 1,
   name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
