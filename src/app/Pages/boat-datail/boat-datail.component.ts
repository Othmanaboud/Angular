import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boat } from 'src/app/Boat';
import { BoatService } from 'src/app/service/boat.service';

@Component({
  selector: 'app-boat-datail',
  templateUrl: './boat-datail.component.html',
  styleUrls: ['./boat-datail.component.css']
})
export class BoatDatailComponent implements OnInit {
  id!: number;
  boats! : Boat

  constructor(private route: ActivatedRoute,private boatservice: BoatService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.boats = new Boat();
    this.boatservice.getBoatByID(this.id).subscribe(data => {
      this.boats = data
    })
  }

}
