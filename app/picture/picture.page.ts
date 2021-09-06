import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import {NavController} from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import {  ActivatedRoute, Params } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.page.html',
  styleUrls: ['./picture.page.scss'],
})
export class PicturePage implements OnInit {
  public items:any
  public id:Number
  public baseurl:String = 'http://admeizhu.feeyr.com'
  public cook:any = this.cookieservice.get('logsign')
  public title:any
  public cover:any
  public tags:any
  public photos:any
  constructor(private http:HttpClient,private photoview:PhotoViewer,private activate:ActivatedRoute,private cookieservice:CookieService,private nav:NavController,private photoLibrary:PhotoLibrary) { }

  ngOnInit() {
    console.log(this.cook,1213)
    this.activate.queryParams.subscribe((params:Params)=>{
      this.http.get(this.baseurl+'/api/album/get/detail/'+params['id']+'?sign='+this.cook).subscribe((res:any)=>{
        this.id = params['id']
        this.title = res.data.title
        this.tags = res.data.tags
        this.cover = res.data.cover
        this.photos = JSON.parse(res.data.url)
      })
    })
  }
  saveImage(){
    this.photoLibrary.requestAuthorization({
      read: true,
      write: true
      }).then(() => {
      // tslint:disable-next-line: max-line-length
      this.photoLibrary.saveImage('http://feeyradm.feeyr.com//uploads/20201223/14284a73d887f5bf92d5baac33f4fc11.jpg', 'admi', {}).then(() => {
      }).catch((err) => {
      console.log(err);
      });
      }).catch((err) => {
      });
  }
  viewimg(id:Number,index:Number){
    this.nav.navigateForward(['pagelist'],{
      queryParams:{
        id:id,
        sort:index
      }
    })
    //this.photoview.show("http://feeyradm.feeyr.com//uploads/20201223/14284a73d887f5bf92d5baac33f4fc11.jpg","图片1") 
  }
  
}
