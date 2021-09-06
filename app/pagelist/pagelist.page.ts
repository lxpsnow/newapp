import { ChangeDetectorRef, Component, OnInit,ViewChild  } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import {  ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import {NavController} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.page.html',
  styleUrls: ['./pagelist.page.scss'],
})
export class PagelistPage implements OnInit {

  constructor(
    private actionsheet:ActionSheetController,
    private cd: ChangeDetectorRef,
    private photoLibrary:PhotoLibrary,
   private modalController: ModalController,
   private nav:NavController,private cookservice:CookieService,private http:HttpClient,private activate:ActivatedRoute) { }
  public items:any
  public timeout:any
  public time:any
  public title:String
  public cook:any = this.cookservice.get('logsign')
  public index:Number
  public baseurl:String = 'http://admeizhu.feeyr.com'
  public leave:boolean = false
  ngOnInit() {
    this.getinfo()
  }
  ionViewDidLeave(){
    if(!this.leave){
      this.actionsheet.dismiss()
    }
}
  @ViewChild(IonSlides) slides: IonSlides;
  onSlideDidChange(event){ 
    this.slides.getActiveIndex().then(number => {
        this.index = Number(number)+1
    });
  }
  start(url:any){
    this.timeout = setTimeout(()=>{
      this.savephoto(url)
    },500)
  }
  end(){
    clearTimeout(this.timeout)
  }
  async savephoto(url:any){
    const actionSheet = await this.actionsheet.create({
      header: '选择发布项目',
      cssClass: 'my-custom-class',
      buttons: [{
        text: '保存图片',
        icon: 'images',
        handler: () => {
          this.photoLibrary.requestAuthorization({
            read: true,
            write: true
            }).then(() => {
            // tslint:disable-next-line: max-line-length
            this.photoLibrary.saveImage(url, 'img', {}).then(() => {
            }).catch((err) => {
            console.log(err);
            });
            }).catch((err) => {
            });
        }
      }, {
        text: '取消',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          this.leave = true
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

    
  }
  at(id:Number){
    console.log(id)
  }
  getinfo(){
    this.activate.queryParams.subscribe((params:Params)=>{
      this.index = Number(params['sort'])+1
      if(params['sort']>0){
        setTimeout(()=>{this.slides.slideTo(params['sort'],0)},0)
      }
      this.http.get(this.baseurl+'/api/album/get/detail/'+params['id']+'?sign='+this.cook).subscribe((res:any)=>{
        this.items = JSON.parse(res.data.url)
      })
    })
  }
  async openViewer(url:String) {
    console.log(url,322)
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
       src: url,
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

}
