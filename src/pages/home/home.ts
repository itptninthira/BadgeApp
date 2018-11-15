import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Array<{id:number,name:string}> = [];

  constructor(public navCtrl: NavController) {
    this.items.push({id: 1, name:'test1'});
    this.items.push({id: 2, name:'test2'});
    this.items.push({id: 3, name:'test3'});
    this.items.push({id: 4, name:'test4'});
    this.items.push({id: 5, name:'test5'});
}

}
