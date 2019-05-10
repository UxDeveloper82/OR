import { InventoryService } from './../../_services/inventory.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {


  constructor(public service: InventoryService,
              private firestore: AngularFirestore,
              private toastr: ToastrService ) { }

ngOnInit() {
      this.resetForm();
        }
        resetForm(form?: NgForm) {
        if (form != null) {
        form.resetForm();
        }
        this.service.formData = {
        id: null,
        brandName: '',
        partNumber: '',
        stock: '',
        };
      }
      submitForm(form: NgForm) {
      const data = form.value;
      this.firestore.collection('inventory').add(data);
      this.resetForm(form);
      this.toastr.success('Submitted successfully', 'Truck Stock');
      }
}

