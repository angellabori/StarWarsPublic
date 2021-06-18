import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { Film } from '../models/film.interfaces';
import { Films } from '../models/films.interfaces';

@Component({
  selector: 'app-user-profile',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  films : Film[];
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    
    this.dataService.sendGetRequestFilms().subscribe((data: Films)=>{
      console.log(data);
      this.films = data.results;
    })  
  }

}
