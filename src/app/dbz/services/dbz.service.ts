import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService {

  constructor(){}

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1500
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes]; //Rompe la referencia es buena practica y crea un nueva instancia del arreglo
  }

  agregarPersonaje( personaje: Personaje){
    this._personajes.push(personaje);
  }
}
