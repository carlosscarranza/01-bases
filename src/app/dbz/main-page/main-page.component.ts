import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  constructor( private dbzService: DbzService ) { }

  ngOnInit(): void {
  }

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
}
