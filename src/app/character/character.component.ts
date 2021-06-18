import { Component, OnInit, Input } from '@angular/core';
import { People } from '../models/people.interfaces';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() character : string;
  people : People
  constructor(private dataService: DataService) { }
  

  ngOnInit(): void {
    console.log(this.character)
    this.dataService.sendGetRequestPeople(this.character).subscribe((data: People)=>{
     console.log(data)
      this.people  = data;
    })  
  }

}
