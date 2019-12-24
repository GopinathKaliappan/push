import { Component } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    pushes: any = [];
    constructor(private fcm: FCM, public plt: Platform) {
      this.enableView = this.enableView.bind(this);
      this.plt.ready()
        .then(() => {
          this.fcm.onNotification().subscribe(data => {
            if (data.wasTapped) {
              console.log("Received in background");
            } else {
              console.log(data);
              this.getToken();
              this.pushes.push(data);
              console.log("Received in foreground");
            };
          });

          this.fcm.onTokenRefresh().subscribe(token => {
            console.log(token)
            localStorage.set('token', token);
            // Register your new token in your back-end if you want
            // backend.registerToken(token);
          });
        })
    }
    enableView(data) {
      console.log(data)
    }
    subscribeToTopic() {
      this.fcm.subscribeToTopic('enappd');
    }
    getToken() {
      this.fcm.getToken().then(token => {
        console.log(token)
        // alert(token);
        // Register your new token in your back-end if you want
        // backend.registerToken(token);
      });
    }
    unsubscribeFromTopic() {
      this.fcm.unsubscribeFromTopic('enappd');
    }
  }
