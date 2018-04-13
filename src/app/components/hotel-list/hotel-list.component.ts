import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import 'rxjs/Rx';

import { CardComponent } from '../card/card.component';
import { ApiService } from '../../services/api.service';
import { FilterPipe } from '../../pipes/filter.pipe';



@Component({
	selector: 'app-hotel-list',
	templateUrl: './hotel-list.component.html',
	styleUrls: ['./hotel-list.component.css'],
	providers: [ ApiService ]
})
export class HotelListComponent{
	startDate: any;
	endDate: any;
  	hotelPrice: number = 0;
	hotels:any;
	result:any;
	dateDiff: number;
	hotelName: string;

	constructor(private apiService: ApiService, private route: ActivatedRoute) {
		
	}

	ngOnInit() {
	    this.route.queryParams.subscribe(params => {
            this.startDate = params["start"];
            this.endDate = params["end"];
            this.dateDiff = +params["diff"];

            this.apiService.getHotels().subscribe(resp => {
				this.result = resp['hotels'];
				this.hotels = this.result;

				this.hotels = this.hotels.filter(hotels => {
			        var date = hotels.availability;
			        for (var i = 0; i <= date.length - 1; i++) {
			        	if (date[i].from >= this.startDate &&  date[i].to <= this.endDate){
			        		hotels.price = hotels.price * this.dateDiff
			        		return hotels
			        	}
			        }
			    });

		    }, (err)=>{
		      console.log(err);
		    })
	      	
        });
	}
	sortByPrice(){
	    this.hotels.sort( (a, b)=>{
	        if ( a.price < b.price ){
	          return -1;
	        }else if( a.price > b.price ){
	            return 1;
	        }else{
	          return 0;  
	        }
	    });
	}

	sortByName(){
	    this.hotels.sort( (a, b) => {
	        if ( a.name < b.name ){
	          return -1;
	        }else if( a.name > b.name ){
	            return 1;
	        }else{
	          return 0;  
	        }
	    });
	}
}
