import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Boat } from 'src/app/Boat';
import { BoatService } from 'src/app/service/boat.service';

@Component({
  selector: 'app-editboat',
  templateUrl: './editboat.component.html',
  styleUrls: ['./editboat.component.css']
})
export class EditboatComponent implements OnInit {
  boats: Boat = new Boat();
  id!:number;
  constructor(private boatservice: BoatService,private rout:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.rout.snapshot.params["id"];
    this.boatservice.getBoatByID(this.id).subscribe(response =>{
      this.boats=response;
    },
    error=>console.log(error));
    
    }
  

  register(){
    this.boatservice.updateBoat(this.id,this.boats).subscribe(response =>{
      this.router.navigateByUrl('/boat');
      alert("edited successfull")
    }, 
    error => console.log(error)
    )

  }
 




}
