import { Component, OnInit } from '@angular/core';
import { Inventory } from '../_models/inventory';
import { InventoryService } from '../_services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


  list: Inventory[];
  constructor(public service: InventoryService) { }

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
}
