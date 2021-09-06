import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import {  ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-circleinfo',
  templateUrl: './circleinfo.page.html',
  styleUrls: ['./circleinfo.page.scss'],
})
export class CircleinfoPage implements OnInit {

  constructor(
    private http:HttpClient,
    private cookservice:CookieService,
    private activate:ActivatedRoute
  ) { }
  public baseurl:String = 'http://admeizhu.feeyr.com'
  public avatar:any
  public nick:any
  public isfollow:any
  public style:Number
  public description:any
  public url:any
  public date:any
  public comment:any
  public avatars:any
  ngOnInit() {
    this.activate.queryParams.subscribe((params:Params)=>{
      this.style = params['style']
      this.getinfo(params['id'],params['style'])
      this.getcom(params['id'],params['style'])
      this.getavatar(params['id'],params['style'])
    })
  }
  getinfo(id:Number,style:Number){
    this.http.get(this.baseurl+'/api/circle/get/detail/'+id+'/'+style+'?sign='+this.cookservice.get('logsign')).subscribe((res:any)=>{
      this.avatar = res.data.avatar
      this.nick = res.data.nick
      this.isfollow = res.data.isfollow
      this.description = res.data.description
      this.url = res.data.url
      this.date = res.data.ctime
    })
  }
  getavatar(id:Number,style:Number){
    this.http.get(this.baseurl+'/api/favorite/get/avatar/'+id+'/'+style+'?sign='+this.cookservice.get('logsign')).subscribe((res:any)=>{
      console.log(13,res.data)
      this.avatars = res.data
    })
  }
  getcom(id:Number,style:Number){
    this.http.get(this.baseurl+'/api/circle/get/comment/'+id+'/'+style+'?sign='+this.cookservice.get('logsign')).subscribe((res:any)=>{
      this.comment = res.data
    })
  }
}
