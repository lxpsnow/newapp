import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AlertController } from '@ionic/angular';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NavController} from '@ionic/angular';
import {  ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public mobile:Number
  public code:Number
  public codestr:String = '获取验证码'
  public baseurl:String = 'http://admeizhu.feeyr.com'
  public status:boolean
  public url:any
  constructor(private activate:ActivatedRoute,private cookieService:CookieService,private nav:NavController,private alertController: AlertController,private http:HttpClient) { }

  ngOnInit() {
    this.status = false
    //this.cookieService.set('login','amlogin')
    //console.log(this.cookieService.get('login'))
    this.activate.queryParams.subscribe((params:Params)=>{
      this.url = params.url
    })
    if(this.cookieService.get('logsign')&&this.cookieService.get('logsign')!='undefined'){
      this.nav.navigateForward(this.url,{
        queryParams:{
          sign:this.cookieService.get('logsign')
        }
      })
    }
  }
  ionViewWillLeave(){
      if(this.cookieService.get('logsign')){}else{
        this.nav.navigateForward('register',{
          queryParams:{
            url:this.url
          }
        })
      }
  }
  async presentAlert(title:any,subHeader:any,message:any) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: subHeader,
      message: message,
      buttons: ['确定']
    });

    await alert.present();
  }
  interval(){
    let i = 60;
    let timer = setInterval(()=>{
      this.codestr = i+'秒后重新发送'
      i--
      if(i<=0){
          clearInterval(timer)
          this.status = false
          this.codestr = '获取验证码'
      }
    },1000)
  }
  login(mobile:any,code:Number){
    if(mobile&&code){
      let pdata = {mobile: mobile,captcha:code}
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
      this.http.post(this.baseurl+'/api/user/post/login',pdata,httpOptions).subscribe((res:any)=>{
        if(res.code==200){
          this.cookieService.set('logname',res.invite)
          this.cookieService.set('logsign',res.sgin)
          this.cookieService.set('logmobile',mobile)
          this.nav.navigateRoot(this.url,{
            queryParams:{
              sign:this.cookieService.get('logsign')
            }
          })
        }
      })
    }else{
      this.presentAlert('操作失败','输入不完整','请检查手机号或验证码！')
    }
  }
  send(mobile:Number){
    if(mobile){
      this.http.get(this.baseurl+'/api/message/get/msg/'+mobile).subscribe((res:any)=>{
        if(res.code==200){
          this.status = true
          this.codestr = '发送成功'
          this.interval()
        }
      })
    }else{
      this.presentAlert('操作失败','手机未输入','请输入手机号码！')
    }
  }
}
