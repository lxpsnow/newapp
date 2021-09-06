import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-pzt',
  templateUrl: './pzt.page.html',
  styleUrls: ['./pzt.page.scss'],
})
export class PztPage implements OnInit {

  constructor(
    private nav:NavController
  ) { }

  ngOnInit() {
  }
  openpage(page:any){
    this.nav.navigateForward(page)
  }
}
