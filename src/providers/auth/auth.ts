import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthProvider {


  API_SERVER:string = "http://localhost:1337/";

  constructor(public httpClient: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  logInUser (data) :Observable<any> {
		return this.httpClient.post(this.API_SERVER + "login", data).pipe(map(this.extractData));
	}

	logOutUser (data) :Observable<any> {
		return this.httpClient.post(this.API_SERVER + "logout", data).pipe(map(this.extractData));
	}

	registerUser (data) :Observable<any> {
		return this.httpClient.post(this.API_SERVER + "register", data).pipe(map(this.extractData));
	}

	private extractData (res: Response) {
		let body = res;
		return body || {};
	}

}
