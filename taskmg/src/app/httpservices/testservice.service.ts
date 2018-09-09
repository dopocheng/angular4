// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TestserviceService {

//   constructor() { }
// }


import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';

class SearchItem {
  constructor(public name: string,
              public artist: string,
              public thumbnail: string,
              public artistId: string) {
  }
}

@Injectable()
export class SearchService {
  // apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[];

  constructor(private jsonp: Jsonp) {
    this.results = [];
  }

  search(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      // let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
      let apiURL = 'https://imoocqa.gugujiankong.com/api/account/login?mobile=13851468237&password=123123'
      this.jsonp.request(apiURL)
          .toPromise()
          .then(
              res => { // Success
                this.results = res.json().results.map(item => {
                  console.log(item);
                  return new SearchItem(
                      item.trackName,
                      item.artistName,
                      item.artworkUrl60,
                      item.artistId
                  );
                });
                resolve(this.results);
              },
              msg => { // Error
                reject(msg);
              }
          );
    });
  }
}