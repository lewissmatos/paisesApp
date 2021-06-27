import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  private nameEndPoint = 'https://restcountries.eu/rest/v2/name'
  private capitalEndPoint = 'https://restcountries.eu/rest/v2/capital'
  private regionEndPoint = 'https://restcountries.eu/rest/v2/region'

  public countries :string[] = []

  getCountriesByName(name: string) {
    return this.http.get<any>(`${this.nameEndPoint}/${name}`).subscribe(
      res => {
        return this.countries = res
      }
    )
  }

}
