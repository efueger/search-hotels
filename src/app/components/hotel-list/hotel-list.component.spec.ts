import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HotelListComponent } from './hotel-list.component';
import { CardComponent } from '../card/card.component';
import { NouisliderModule } from 'ng2-nouislider';
import { FilterPipe } from '../../pipes/filter.pipe';

describe('HotelListComponent', () => {
  let component: HotelListComponent;
  let fixture: ComponentFixture<HotelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule, FormsModule, NouisliderModule ],
      declarations: [ CardComponent, HotelListComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
