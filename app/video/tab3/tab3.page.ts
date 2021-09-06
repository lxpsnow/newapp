import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {NavController} from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import {  ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(
    private http:HttpClient,
    private cookservice:CookieService,
    private nav:NavController,
    private actionSheetController: ActionSheetController,
    private activate:ActivatedRoute
  ) {}
  public baseurl:String = 'http://admeizhu.feeyr.com'
  public list:any
  public page:any = 0
  public sign:String
  ngOnInit(): void {
    this.checksign()
    if(this.cookservice.get('lgosign')){
      this.getlist(this.cookservice.get('logsign'))
    }else{
      this.activate.queryParams.subscribe((params:Params)=>{
        this.getlist(params['sign'])
      }) 
    }
    
  }
  ionViewWillEnter(){
    if(this.list){}else{ 
      if(this.cookservice.get('logsign')){
        this.getlist(this.cookservice.get('logsign'))
      }else{
        this.activate.queryParams.subscribe((params:Params)=>{
          this.getlist(params['sign'])
        })
      }
    }
    this.checksign()
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '选择发布项目',
      cssClass: 'my-custom-class',
      buttons: [{
        text: '发布视频',
        icon: 'camera',
        handler: () => {
          this.nav.navigateForward('pubvideo')
        }
      }, {
        text: '发布相册',
        icon: 'images',
        handler: () => {
          this.nav.navigateForward('pubpic')
        }
      }, {
        text: '取消',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  ck(id:Number,f:Number,e:any){
    console.log(f,e.target.innerText)
      this.http.get(this.baseurl+'/api/user/get/follow/'+id+'&sign='+this.cookservice.get('logsign')).subscribe((res:any)=>{
        if(res.status==1){
          e.target.innerText='+关注'
        }else{
          e.target.innerText='取消'
        }
      })
  }
  pl(id:Number,style:Number){
    this.nav.navigateForward(['circleinfo'],{
      queryParams:{
        id:id,
        style:style
      }
    })
  }
  checksign(){
    if(this.cookservice.get('logsign')&&this.cookservice.get('logsign')!='undefined'){
      console.log(1)
    }else{
      this.nav.navigateForward('register',{
        queryParams:{
          url:'tabs/tab3'
        }
      })
    }
  }
  parse(json:any){
    console.log(JSON.parse(json))
    return JSON.parse(json)
  }
  loadData(event:any){
    this.page = Number(this.page)+1
    this.http.get(this.baseurl+'/api/circle/get/lists/'+this.page+'?sign='+this.cookservice.get('logsign')).subscribe((res:any)=>{
      if(res.code==200){
        if(res.data.length){
          for(let i=0;i<res.data.length;i++){
            this.list.push(res.data[i])
          } 
          event.target.complete();
        }else{
          event.target.disabled = true;
        }
      }
    })
  }
  doRefresh(event:any){
    this.ngOnInit();  // 调用的方法，这个初始化的内容，所有肯定有页面的数据，也可以直接写个方法：this.gotoSignIn()
    setTimeout(() => {
      event.target.complete();  // 这个是我们进行执行方法必须的
    }, 1000); 
  }
  gopic(id:Number,index:Number){
      this.nav.navigateForward(['pagelist'],{
        queryParams:{
          id:id,
          sort:index
        }
      })
  }
  govideo(id:Number){
    this.nav.navigateForward(['video'],{
      queryParams:{
        id:id
      }
    })
  }
  getlist(sign:String){
    console.log(123,sign)
    this.http.get(this.baseurl+'/api/circle/get/top?sign='+sign).subscribe((res:any)=>{
      console.log(res,1212)
      if(res.code==200){
        this.list = res.data
      }
    })
  }
}
