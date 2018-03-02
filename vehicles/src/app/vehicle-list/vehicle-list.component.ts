/*importing the Component decorator function and the OnInit interface
decorator function is describing metadata for any Angular 2 reusable UI component* 
 The OnInit interface extension is used to register an init lifecycle hook.*/

import { Vehicle } from '../model/vehicle';
import { VehicleService } from '../vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  
  //Selector specifies the tag name that would trigger this component’s insertion
   //selector: 'app-vehicle-list',
  selector: 'app-vehicle-list',
  //selector: 'vehicle-list',
  
  /*TemplateUrl and styleUrls specify the file names that contain an HTML-based 
   template for the component UI and CSS styling for it.*/
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
  providers: [VehicleService]
})
  
export class VehicleListComponent implements OnInit { 
  
  vehicles : Vehicle[]; 
  
  constructor(private vehicleService : VehicleService) { 
    this.vehicles = this.vehicleService.getVehicles();
  }

  /*It can be useful for some “heavy” initialization like network or database calls.*/
  ngOnInit() {
  }

}
