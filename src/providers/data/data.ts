
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataProvider {

  API_SERVER:string = "http://senduk-api.herokuapp.com/api/v1/";

  constructor(public httpClient: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  testData () :Observable<any> {
		return this.httpClient.get(this.API_SERVER + "client").pipe(map(this.extractData));
  }
  
  private extractData (res: Response) {
		let body = res;
		return body || {};
	}

}
