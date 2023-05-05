import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from 'src/app/core/services/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit{

  createPackageFlag:boolean = true
  packagesArray: any = []
  packageObj :any
  constructor(private service:PackageService, private router:Router){  }

  ngOnInit(): void {
    this.createPackageFlag = true
    this.service.getAllRecords("Packages").subscribe(result => {
      this.packagesArray = result
    })
    this.loadPackages();

    this.packageObj = {
      "packageName": "",
      "packageCost": undefined,
      "packageDescription": "",
      "isPackageActive": false
    }
  }
  loadPackages(){

  }
  addNewPackage(){
    console.log(this.packageObj);
    this.service.addRecord("Packages", this.packageObj).subscribe(
      () => {
        alert("Package Added")
      },
      error => {
        alert("Error")
      }
    )
  }
  editPackage(id:any){
    this.createPackageFlag = false
    this.service.getRecordById("Packages", id).subscribe((result) => {
      this.packageObj =result
      console.log(this.packageObj);
    })
  }
  updatePackage(){
    this.service.updateRecord("Packages", this.packageObj).subscribe(result => {
      alert("Package Updated")
    })
    this.router.navigate(['package'])
  }
  deletePackage(id:any){
    if(confirm("Are you sure you want to delete the package?")){
      this.service.deleteRecord("Packages", id).subscribe(result => {
        alert("record deleted")
      })
    } else {
      alert("error")
    }
  }
}
