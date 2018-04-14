import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
	url: string = 'https://api.myjson.com/bins/tl0bp';

	constructor(private http:HttpClient) { }

	getHotels() {
		return this.http.get(this.url);
	}
}
