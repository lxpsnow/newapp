import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public val:any
  constructor() {}

  ngOnInit() {
  }
  doChange(val:string){
    console.log(val)
  }

}
