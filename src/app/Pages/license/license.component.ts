import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Liencense } from 'src/app/Liecense';
import { LiecenseService } from 'src/app/service/liecense.service';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {
  licenses!: Liencense[];

  constructor(private licensesrv: LiecenseService,private router: Router) { }

  ngOnInit(): void {
    this.getLicense();
  }
  getLicense(){
    this.licensesrv.getLicense().subscribe(response =>{
      this.licenses=response;
    },
    (err) =>{
      console.log(err)
    }
    )
  }
  update(id: any){
    this.router.navigate(['editlicense',id])
    
  }
  delete(id:any){
    this.licensesrv.deleteLicense(id).subscribe(data =>{
      console.log(data);
      this.getLicense();
    })

  }

}
