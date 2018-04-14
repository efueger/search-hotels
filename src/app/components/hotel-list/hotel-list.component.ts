import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
export class HotelListComponent implements OnInit {
	startDate: any;
	endDate: any;
	hotelPrice: number = 0;
	hotels: any;
	dateDiff: number;
	hotelName: string;
	flag: boolean = true;

	constructor(private apiService: ApiService, private route: ActivatedRoute,private router: Router) {}

	ngOnInit() {
	    this.route.queryParams.subscribe(params => {
            this.startDate = params['start'];
            this.endDate = params['end'];
            this.dateDiff = +params['diff'];

            this.apiService.getHotels().subscribe(resp => {

				this.hotels = resp['hotels'].filter(hotels => {
			        let date = hotels.availability;
			        for (let i = 0; i <= date.length - 1; i++) {
			        	if (date[i].from >= this.startDate &&  date[i].to <= this.endDate) {
			        		hotels.price = hotels.price * this.dateDiff;
			        		this.flag = true;
			        		return hotels;
			        	}else{
			        		this.flag = false;
			        	}
			        }
			    });

		    }, (err) => {
		      console.log(err);
		    });
	      	
        });
	}

	backForSearch() {
		this.router.navigate(['/']);
	}

	sortHotels(prop) {
		this.hotels.sort( (a, b)=>{
	        if ( a[prop] < b[prop] ){
	          return -1;
	        }else if( a[prop] > b[prop] ){
	            return 1;
	        }else{
	          return 0;  
	        }
	    });
	}
}
