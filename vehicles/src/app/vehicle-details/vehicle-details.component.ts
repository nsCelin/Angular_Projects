import { Vehicle } from '../model/vehicle';
import { VehicleService } from '../vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
  providers: [VehicleService]
})
export class VehicleDetailsComponent implements OnInit {

  //constructor() { }
  
  vehicles : Vehicle[];
  selectedVehicle: Vehicle;
  
  constructor(private vehicleService : VehicleService) { 
    this.vehicles = this.vehicleService.getVehicles();
  }

  ngOnInit() {
  }
  
  onSelect(vehicle: Vehicle) { this.selectedVehicle = vehicle; }

}