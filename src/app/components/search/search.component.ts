import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IMyDpOptions } from 'mydatepicker';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent {
	startDate: any;
	endDate: any;
	dateDiff: number;
	public myForm: FormGroup;

	constructor(private router: Router) {}

	public myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd-mm-yyyy',
    };

	hotelSearch(e){
	    if(this.startDate !== undefined && this.endDate !== undefined ) {
	      	this.dateDiff = Math.abs(Math.round((this.endDate.jsdate-this.startDate.jsdate)/86400000));

	        let navigationExtras: NavigationExtras = {
	            queryParams: {
	                'start': this.startDate.formatted,
	                'end': this.endDate.formatted,
	                'diff': this.dateDiff
	            }
	        };

	      this.router.navigate(['/list'], navigationExtras);
	    }
	}
}
