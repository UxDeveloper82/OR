import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { Inventory } from './../../_models/inventory';
import { InventoryService } from './../../_services/inventory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  list: Inventory[];
  constructor(public service: InventoryService,
              private firestore: AngularFirestore,
              private toastr: ToastrService) { }

ngOnInit() {
    this.service.getInventory().subscribe(actionArray => {
         this.list = actionArray.map(item => {
           return {
             id: item.payload.doc.id,
             ...item.payload.doc.data()
             } as Inventory;
         });
    });
  }

  onEdit(inv: Inventory) {
     this.service.formData = Object.assign({}, inv);
  }

  onDelete(id: string) {
    if (confirm('Are You sure you want to delete this record?')) {
      this.firestore.doc('inventory/' + id ).delete();
      this.toastr.warning('Deleted Succesfully', 'Truck Inventory');
    }
  }
}


