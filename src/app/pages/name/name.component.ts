import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }
  
  countries: any[] = []
  
  search(txtCountry: string) {
    this.data.getCountriesByName(txtCountry)
    this.countries = this.data.countries
  }

}
