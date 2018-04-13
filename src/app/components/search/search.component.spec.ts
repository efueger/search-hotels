import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 import { FormsModule } from '@angular/forms';
 import { MyDatePickerModule } from 'mydatepicker';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
// import { HotelListComponent } from '../hotel-list/hotel-list.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ FormsModule, MyDatePickerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
