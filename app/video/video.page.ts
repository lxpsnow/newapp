import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import {  ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  constructor(
    private http:HttpClient,
    private cookieservice:CookieService,
    private activate:ActivatedRoute
  ) { }
  public baseurl:String = 'http://admeizhu.feeyr.com'
  public url:any
  ngOnInit() {
   this.activate.queryParams.subscribe((params:Params)=>{
     this.getvideo(params['id'])
   })
  }
  getvideo(id:Number){
    this.http.get(this.baseurl+'/api/video/get/url/?id='+id+'&sign='+this.cookieservice.get('logsign')).subscribe((res:any)=>{
      let a = res.url.split('http')[1]
      if(a){
        this.url = res.url
      }else{
        this.url = 'http://admeizhu.feeyr.com'+res.url
      }
    })
  }

}
