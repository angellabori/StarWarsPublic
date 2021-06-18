import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data/data.service';
import { Film } from '../models/film.interfaces';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
   
    <div class="modal-body"> 
      <img class="card-img-top" src="../assets/img/giphy.gif" alt="Card image cap">
    </div>
    
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
 @Input()  film : string;
 dataFilm :Film;
  constructor(private dataService : DataService,
    private modalService: NgbModal) { }
    open() {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name = 'World';
    }
  ngOnInit(): void {
     
    this.dataService.sendGetRequestFilm(this.film).subscribe((data: Film)=>{
      console.log(data);
      this.dataFilm  = data;
    })  
  }

}
