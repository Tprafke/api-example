import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  baseUrl: string = 'https://api.giphy.com/v1/gifs/search';
  key: string = 'Ui32UcBleMSSnHq8h8rfnyc85v1t6MUT';

  constructor(private http: HttpClient) {}

  getData = (searchTerm: string): any => {
    return this.http.get(this.baseUrl, {
      params: {
        api_key: this.key,
        q: searchTerm,
      },
    });
  };
}
