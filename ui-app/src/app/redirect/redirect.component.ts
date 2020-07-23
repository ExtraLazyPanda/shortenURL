import { Component, OnInit } from '@angular/core';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getDataFromJson().subscribe((data) => {
      console.log(data);
    });

    this.appService.getDataFromApi().subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

  showPopup() {
    alert('Hey There');
  }

}
