import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Liencense } from 'src/app/Liecense';
import { LiecenseService } from 'src/app/service/liecense.service';

@Component({
  selector: 'app-editlicense',
  templateUrl: './editlicense.component.html',
  styleUrls: ['./editlicense.component.css']
})
export class EditlicenseComponent implements OnInit {
  licenses: Liencense = new Liencense();
  id!: number;

  constructor(private licensesrv: LiecenseService,private route:Router,private rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.rout.snapshot.params["id"];
    this.licensesrv.getLicenseByID(this.id).subscribe(response =>{
      this.licenses=response
    },
    err => console.log(err)
    )


  }

  updateLicense(){
    this.licensesrv.updateLicense(this.id, this.licenses).subscribe(data =>{
      console.log(data);
      this.licenses = new Liencense();
      this.route.navigateByUrl("/license");

    } ,err => console.log(err)
    )
  }

  onSubmit(){
   
    this.updateLicense

  }


}
