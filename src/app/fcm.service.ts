import { Token } from '@angular/compiler';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  router=inject(Router);

  constructor() { }
  initpush(){
    if(Capacitor.isNativePlatform()){
      this.registerPush();
    }
  }

  private registerPush(){
    PushNotifications.requestPermissions().then(async(Permission)=>{
      if(Permission.receive=="granted"){
        await PushNotifications.register();
      }else{

      }
    });
    PushNotifications.addListener('registration',async Token =>{
      console.log("token",Token);
    });
    PushNotifications.addListener('registrationError',(error:any)=>{
      console.log('Error',JSON.stringify(error));

    });
    PushNotifications.addListener('pushNotificationActionPerformed',async(notification)=>{
      console.log("notification",notification);
      const data =notification.notification;
      console.log("data tolken data",data.data);
      this.router.navigateByUrl("/pages/dashboard");
    });


    
  }

}