import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Boat } from 'src/app/Boat';
import { BoatService } from 'src/app/service/boat.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css']
})
export class BoatComponent implements OnInit {
  boats!:Boat [];

  constructor(private boatservice: BoatService, private router: Router) { }

  ngOnInit(): void {
    this.getBoat();
    
    
  }
  getBoat(){
    this.boatservice.getBoats().subscribe(
      (resp) =>{
        console.log(resp);
        this.boats=resp;
      },
      (err) => {
        console.log(err);
      }
    );
      
  }
  deleteBoat(id: number){
    this.boatservice.deleteBoat(id).subscribe( 
      (data) =>{
        console.log(data)
        this.getBoat();
      },
      (err) =>{
        console.log(err);
      }
    );
     
    

  }
  editBoat(boat:any){
    
    

  }


  
  update(id:any){
    this.router.navigate(['editboat',id]);
  }
  viewBoat(id: any){

    this.router.navigate(['boat-details',id]);
   
    
  }

  

}
