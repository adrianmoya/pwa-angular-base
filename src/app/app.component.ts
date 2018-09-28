import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-angular-base';
  pubObject = '';
  VAPID_PUBLIC_KEY = 'BO3Ssq98k_Vbg2N6Jo0SDF10ZqgX20RMQ_wMhzXNp5yt91bt6AdsjBMTlwR4hOzKw2wyunNx1Ulzw6iIahTh6eU'

  constructor(private swPush: SwPush) { }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => {
        console.log(sub.toJSON());
        this.pubObject = JSON.stringify(sub.toJSON());
      }
      )
      .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
