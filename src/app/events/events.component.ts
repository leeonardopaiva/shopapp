import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {


  public events$: Observable<any>;

  constructor(private http: HttpClient){

  }



  ngOnInit() {

      //  this.events$ = this.http.get("https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events").subscribe(d=> console.log(d));
      // this.events$ = this.http.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
      this.events$ = this.http.get("https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events/")
  }

}
