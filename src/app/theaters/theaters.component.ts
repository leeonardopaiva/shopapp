import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.scss']
})
export class TheatersComponent implements OnInit {

  public theaters$: Observable<any>;
  public movies$: Observable<any>;

  constructor(private http: HttpClient){

  }
  ngOnInit() {

      // this.events$ = this.http.get("https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events/23345/theaters")
       this.theaters$ = this.http.get("https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events/23345/theaters"),
       this.movies$ = this.http.get("https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events/?id=24056")


  }





}
