import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {NavController} from '@ionic/angular';
import { HttpClient } from '@angular/common/http'
import { rendererTypeName } from '@angular/compiler';
@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  constructor(
    private cookservice:CookieService,
    private nav:NavController,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.checksign()
    this.getinfo()
  }
  ionViewWillEnter(){
    this.checksign()
  }
  public baseurl:String = 'http://admeizhu.feeyr.com'
  public info:any
  public avatar:any
  public id:any
  public nick:any
  public vip:any
  public daili:any
  public todaygold:any
  public gold:any
  public amount:any
  public invite:any
  checksign(){
    if(this.cookservice.get('logsign')&&this.cookservice.get('logsign')!='undefined'){
      console.log(1)
    }else{
      this.nav.navigateForward('register',{
        queryParams:{
          url:'task'
        }
      })
    }
  }
  getinfo(){
    this.http.get(this.baseurl+'/api/user/get/info?sign='+this.cookservice.get('logsign')).subscribe((res:any)=>{
      console.log(res.data)
      this.avatar = res.data.avatar
      this.nick = res.data.nick
      this.id = res.data.id
      this.daili = res.data.isagent
      this.todaygold = res.data.today_gold
      this.gold = res.data.gold
      this.amount = res.data.amount
      this.invite = res.data.invite_num
      if(res.data.vip==0){
        this.vip = '未开通'
      }else if(res.data.vip>0 && res.data.vip<4){
        this.vip = '到期时间：'+res.data.viptime
      }else{
        this.vip = '永久VIP'
      }
    })
  }
}
