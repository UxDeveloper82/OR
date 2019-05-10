import { Injectable } from '@angular/core';
import { Inventory } from '../_models/inventory';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  formData: Inventory;

constructor(private firestore: AngularFirestore) { }

   getInventory() {
     return this.firestore.collection('inventory').snapshotChanges();
   }

}
