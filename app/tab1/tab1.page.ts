import { Component, OnInit,ViewChild  } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import {NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {  ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public items:any
  public jsons:any
  public itema:any
  public headimg:any
  public slide01:any
  public baseurl:String = 'http://admeizhu.feeyr.com'
  public cats:any
  public list:any
  public style:boolean = false
  public child:any
  public zlist:any
  public news:any
  public hots:any
  public activeIndex:any
  constructor(private activate:ActivatedRoute,private nav:NavController,private http:HttpClient,private CookieService:CookieService) {}
  @ViewChild('slide01') slides:IonSlides;

  getinfos(index:any){
    this.activeIndex = index
    this.slides.slideTo(index,500)
    if(index==1){
      if(this.list){}else{
      this.getinfo()
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
  slideDidChange(event:any){
    this.slides.getActiveIndex()
        .then(async (activeIndex: number) => {
          if(activeIndex==1){
            if(this.list){}else{
              this.getinfo()
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
        });
  }
  getnews(){
    this.http.get(this.baseurl+'/api/album/get/recommend/0/1/30?sign=null').subscribe((res:any)=>{
      console.log(res,111)
      this.news = res.data
    })
  }
  goto(url:any){
    this.nav.navigateForward(url)
  }
  gethot(){
    this.http.get(this.baseurl+'/api/album/get/hot/0/1/30?sign=null').subscribe((res:any)=>{
      this.hots = res.data
    })
  }
  set(){
    if(this.style==true){
      this.style = false
      this.http.get(this.baseurl+'/api/album/get/recommend/1/1?sign=null').subscribe((res:any)=>{
        this.list = res.data
      })
    }
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
  getzt(){
    this.http.get(this.baseurl+'/api/album/get/special?sign=null').subscribe((res:any)=>{
      console.log(res,121)
      this.zlist = res.data
    })
  }
  catpic(id:Number){
    if(!this.CookieService.get('logsign')&&this.CookieService.get('logsign')!='undefined'){
      this.nav.navigateForward(['register'],{
        queryParams:{
          url:'tabs/tab1'
        }
      })
    }else{
      this.nav.navigateForward(['catpic'],{
        queryParams:{
          id:id
        }
      })
    }
  }
  openpage(page:any){
    this.nav.navigateForward(page)
  }
  getcook(){
    this.activate.queryParams.subscribe((params:Params)=>{
      if(params['sign']){
        if(!this.CookieService.get('logsign')&&this.CookieService.get('logsign')!='undefined'){
          this.CookieService.set('logsign',params['sign'])

        }
      }
    })
  }
  ngOnInit(){
    this.getcook()
    this.http.get(this.baseurl+'/api/album/get/index?sign=null').subscribe((res:any)=>{
        this.items = res.data
      })
      this.http.get(this.baseurl+'/api/slide/get/album?sign=null').subscribe((res:any)=>{
        this.headimg = res.data
      })
  }
  ToSearch(){
    if(this.CookieService.get('logsign')&&this.CookieService.get('logsign')!='undefined'){
      this.nav.navigateForward('search')
    }else{
      this.nav.navigateForward('register',{
        queryParams:{
          url:'tabs/tab1'
        }
      })
    }
  }
  gotopic(id:Number){
    if(this.CookieService.get('logsign')&&this.CookieService.get('logsign')!='undefined'){
      this.nav.navigateForward(['picture'],{
        queryParams:{
          id:id
        }
      })
    }else{
      this.nav.navigateForward('register',{
        queryParams:{
          url:'tabs/tab1'
        }
      })
    }
  }
}
