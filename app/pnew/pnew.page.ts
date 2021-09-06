import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-pnew',
  templateUrl: './pnew.page.html',
  styleUrls: ['./pnew.page.scss'],
})
export class PnewPage implements OnInit {

  constructor(
    private nav:NavController
  ) { }

  ngOnInit() {
  }
  openpage(page:any){
    this.nav.navigateForward(page)
  }
}
