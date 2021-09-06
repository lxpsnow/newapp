import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-phot',
  templateUrl: './phot.page.html',
  styleUrls: ['./phot.page.scss'],
})
export class PhotPage implements OnInit {

  constructor(
    private nav:NavController
  ) { }

  ngOnInit() {
  }
  openpage(page:any){
    this.nav.navigateForward(page)
  }
}
