import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  saveSubscription(sub) {
    const subsCollection = this.afs.collection<PushNotification>('subscriptions');
  }
}
