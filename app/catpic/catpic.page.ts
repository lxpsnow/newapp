import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {  ActivatedRoute, Params } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-catpic',
  templateUrl: './catpic.page.html',
  styleUrls: ['./catpic.page.scss'],
})
export class CatpicPage implements OnInit {

  constructor(
    private http:HttpClient,
    private cookieservice:CookieService,
    private activate:ActivatedRoute,
    public nav:NavController
  ) { }
  public baseurl:String = 'http://admeizhu.feeyr.com'
  public title:String
  public description:String
  public catimg:String
  public list:any
  public page:any=1
  public style:Number
  public notice:String = '正在加载更多...'
  ngOnInit() {
    this.activate.queryParams.subscribe((params:Params)=>{
      this.style = params['id']
      this.getlist(params['id'])
    })
  }
  doRefresh(event:any){
    this.ngOnInit();  // 调用的方法，这个初始化的内容，所有肯定有页面的数据，也可以直接写个方法：this.gotoSignIn()
    setTimeout(() => {
      event.target.complete();  // 这个是我们进行执行方法必须的
    }, 1000);  // 1000表示执行的时间在1s内，如果执行的慢的话这个需要在增加
  }
  gotopic(id:Number){
    this.nav.navigateForward(['picture'],{
      queryParams:{
        id:id
      }
    })
  }
  loadData(e){
    this.page = Number(this.page)+1
    this.http.get(this.baseurl+'/api/album/get/more/'+this.style+'/'+this.page+'?sign='+this.cookieservice.get('logsign')).subscribe((res:any)=>{
      if(res.code==200){
        if(res.data.length){
          for(let i=0;i<res.data.length;i++){
            this.list.push(res.data[i])
          }
          e.target.complete();
        }else{
          this.notice = '已经到底了'
          e.target.disabled = true;
        }
        
      }
    })
  }
  getlist(style:Number){
    this.http.get(this.baseurl+'/api/album/get/more/'+style+'/1?sign='+this.cookieservice.get('logsign')).subscribe((res:any)=>{
      if(res.code==200){
        this.title = res.category.catname
        this.description = res.category.description
        this.catimg = res.category.catimg
        this.list = res.data
      }
    })
  }
}
