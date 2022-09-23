import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Liencense } from 'src/app/Liecense';
import { LiecenseService } from 'src/app/service/liecense.service';

@Component({
  selector: 'app-addlicense',
  templateUrl: './addlicense.component.html',
  styleUrls: ['./addlicense.component.css']
})
export class AddlicenseComponent implements OnInit {
  licenses: Liencense = new Liencense();
  constructor(private licenseSrv: LiecenseService, private router: Router) { }

  ngOnInit(): void {
  }
  

  onSubmit(registerForm: FormsModule){
    this.licenseSrv.saveLicense(this.licenses).subscribe(response =>{
      alert("Boat successfull added!")
      this.router.navigateByUrl("/license")
    })

  }
}
