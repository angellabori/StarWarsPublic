import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { Film } from '../models/film.interfaces';
import { ActivatedRoute, Params } from '@angular/router';
import { People } from '../models/people.interfaces';
@Component({
  selector: 'app-user-profile',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class UserProfileComponent implements OnInit {
  characters: any[];
  page = 1;
  pageSize = 10;
  constructor(
    private rutaFilm: ActivatedRoute,
    private dataService: DataService
    ) { }

  ngOnInit() { 
    this.dataService.sendGetRequestFilm(this.rutaFilm.snapshot.params.film).subscribe((data: Film)=>{
      
      this.characters = data.characters;
      
    })  
  }

}
