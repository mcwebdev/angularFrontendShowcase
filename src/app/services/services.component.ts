import { Component, OnInit } from '@angular/core';
import { BasicService } from 'src/shared-services/basic.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  users: BasicService = new BasicService;

  constructor() { }

  ngOnInit(): void {
  }

}
