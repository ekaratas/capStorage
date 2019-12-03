import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  id;
  name;

  DataArray: Array<any> = [];

  constructor() {}

  async setObject() {
    await Storage.set({
      key: 'bildirimler',
      value: JSON.stringify(this.DataArray)
    });
  }

  ekle() {

    let deger = {
      id : this.id,
      name : this.name
    }

    this.DataArray.push(deger);
    this.setObject();

  }

  async getObject() {
    const ret = await Storage.get({ key: 'bildirimler' });
    const liste = JSON.parse(ret.value);
    console.log(liste);
  }

}
