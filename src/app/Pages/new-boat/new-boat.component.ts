import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Boat } from 'src/app/Boat';
import { BoatService } from 'src/app/service/boat.service';

@Component({
  selector: 'app-new-boat',
  templateUrl: './new-boat.component.html',
  styleUrls: ['./new-boat.component.css']
})
export class NewBoatComponent implements OnInit {
  
  

  constructor(private boatservice: BoatService, private router: Router) { }
boats: Boat = new Boat();


  ngOnInit(): void {
    
  }


  onSubmit(registerForm: FormsModule){
    this.boatservice.saveNewBoat(this.boats).subscribe(response =>{
     
      alert("Boat successfull added!")
      this.router.navigateByUrl("/boat")
    })

  }

}
