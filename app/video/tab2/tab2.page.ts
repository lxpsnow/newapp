import { Component,OnInit,ViewChild  } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import {NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(
    private http:HttpClient,
    //private slide:IonSlides,
    private cookieservice:CookieService,
    private nav:NavController
    ) {}
  public baseurl:String = 'http://admeizhu.feeyr.com'
  public slide:any
  public allvideo:any
  public cats:any
  public list:any
  public style:boolean = false
  public child:any
  public zlist:any
  public news:any
  public hots:any
  ngOnInit(): void {
    this.getslide()
    this.getvideos()
  }
  @ViewChild('slide01') slides:IonSlides;
  getinfos(index:number){
    this.slides.slideTo(index,500)
    if(index==1){
      if(this.list){}else{
        this.getfl()
      }
    }else if(index==2){
      if(this.zlist){}else{
        this.getzt()
      }
    }else if(index==3){
      if(this.news){}else{
        this.getnews()
      }
    }else if(index==4){
      if(this.hots){}else{
        this.gethot()
      }
    }
  }
  set(){
    if(this.style==true){
      this.style = false
      this.http.get(this.baseurl+'/api/video/get/recommend/1/1?sign=null').subscribe((res:any)=>{
        this.list = res.data
      })
    }
  }
  get(id:Number){
    this.style = true
    this.http.get(this.baseurl+'/api/video/get/category/'+id+'?sign=null').subscribe((res:any)=>{
      this.child = res.data
    })
  }
  getlist(id:Number){
    this.http.get(this.baseurl+'/api/video/get/more/'+id+'?sign=null').subscribe((res:any)=>{
      this.list = res.data
    })
  }
  getzt(){
    this.http.get(this.baseurl+'/api/video/get/special?sign=null').subscribe((res:any)=>{
      console.log(res.data)
      this.zlist = res.data
    })
  }
  getnews(){
    this.http.get(this.baseurl+'/api/video/get/recommend/0/1/30?sign=null').subscribe((res:any)=>{
      this.news = res.data
    })
  }
  gethot(){
    this.http.get(this.baseurl+'/api/video/get/hot?sign=null').subscribe((res:any)=>{
      this.hots = res.data
    })
  }
  slideDidChange(event:any){
    this.slides.getActiveIndex()
    .then((activeIndex:number)=>{
      if(activeIndex==1){
        if(this.list){}else{
          this.getfl()
        }
      }else if(activeIndex==2){
        if(this.zlist){}else{
          this.getzt()
        }
      }else if(activeIndex==3){
        if(this.news){}else{
          this.getnews()
        }
      }else if(activeIndex==4){
        if(this.hots){}else{
          this.gethot()
        }
      }
    })
  }
  getslide(){
    this.http.get(this.baseurl+'/api/slide/get/video?sign=null').subscribe((res:any)=>{
      this.slide = res.data
    })
  }
  getvideos(){
    this.http.get(this.baseurl+'/api/video/get/index?sign=null').subscribe((res:any)=>{
      this.allvideo = res.data
    })
  }
  getfl(){
    this.http.get(this.baseurl+'/api/video/get/category?sign=null').subscribe((res:any)=>{
      this.cats = res.data
    })
    this.http.get(this.baseurl+'/api/video/get/recommend/1/1?sign=null').subscribe((res:any)=>{
      this.list = res.data
    })
  }
  goto(id:Number){
    this.nav.navigateForward(['video'],{
      queryParams:{
        id:id
      }
    })
  }
}
