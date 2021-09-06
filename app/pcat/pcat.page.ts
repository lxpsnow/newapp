import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-pcat',
  templateUrl: './pcat.page.html',
  styleUrls: ['./pcat.page.scss'],
})
export class PcatPage implements OnInit {

  constructor(
    private http:HttpClient,
    private nav:NavController
  ) { }
  public baseurl:String = 'http://admeizhu.feeyr.com'
  public cats:any
  public list:any
  public style:boolean = false
  public child:any
  ngOnInit() {
    this.getinfo()
  }
  set(){
    if(this.style==true){
      this.style = false
      this.http.get(this.baseurl+'/api/album/get/recommend/1/1?sign=null').subscribe((res:any)=>{
        this.list = res.data
      })
    }
  }
  openpage(page:any){
    this.nav.navigateForward(page)
  }
  getlist(id:Number){
    this.http.get(this.baseurl+'/api/album/get/more/'+id+'?sign=null').subscribe((res:any)=>{
      this.list = res.data
    })
  }
  get(id:Number){
    this.style = true
    this.http.get(this.baseurl+'/api/album/get/category/'+id+'?sign=null').subscribe((res:any)=>{
      this.child = res.data
      console.log(1212,res)
    })
  }
  getinfo(){
    this.http.get(this.baseurl+'/api/album/get/category?sign=null').subscribe((res:any)=>{
      this.cats = res.data
    })
    this.http.get(this.baseurl+'/api/album/get/recommend/1/1?sign=null').subscribe((res:any)=>{
      this.list = res.data
    })
  }
}
