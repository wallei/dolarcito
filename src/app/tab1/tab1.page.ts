import { Component } from '@angular/core';
import { DolarService } from '../services/dolar.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  
  dolarData : any;
  
    constructor(public proveedor: DolarService) {}
  
    ngOnInit() {
      this.loadDolarData();
     }
     loadDolarData() {
     this.proveedor.llamarApiDolar()
     .subscribe({
     next : (data)=> {this.dolarData = data;},
     error : (error)=> {console.log(error);}
     
     })
     console.log(this.dolarData);
     console.log("accedimos a la api de dolar con loadDolarData");
  }

}
