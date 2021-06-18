import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Films } from '../models/films.interfaces';
import { People } from '../models/people.interfaces';
import { Film } from '../models/film.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://swapi.dev/api/";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequestFilms():Observable<Films>{
      let direccion = this.REST_API_SERVER + 'films/'
    return this.httpClient.get<Films>(direccion);
  }
  public sendGetRequestPeople(people:string):Observable<People>{
     let direccion =   people
     return this.httpClient.get<People>(direccion);
    }
    public sendGetRequestFilm(film:string):Observable<Film>{
        let direccion =   film
        return this.httpClient.get<Film>(direccion);
    }
}