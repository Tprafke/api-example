import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  gifs: any;

  constructor(private route: ActivatedRoute, private service: GiphyService) {}

  ngOnInit(): void {
    this.getGifs();
  }

  getGifs = () => {
    this.route.queryParamMap.subscribe((params) => {
      console.log(params.get('term'));
      let term = params.get('term');
      this.service.getData(term).subscribe((response) => {
        this.gifs = response.data;
      });
    });
  };
}
