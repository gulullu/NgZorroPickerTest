import { Component } from '@angular/core';
import { Picker } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  name  = '选择';
  value =  [];
  houses = [
    '不限' ,
    '已购房' ,
    '未购房'
];
  constructor(private _picker: Picker) { }
  showPicker() {
    Picker.showPicker({value: this.value, data: this.houses}, (result) => {
      this.name = this.getResult(result);
      this.value = this.getValue(result);
    });
  }

  getResult(result) {
    this.value = [];
    let temp = '';
    result.forEach(item => {
      this.value.push(item.label || item);
      temp += item.label || item;
    });
    return this.value.map(v => v).join(',');
  }

  getValue(result) {
    const value = [];
    let temp = '';
    result.forEach(item => {
      value.push(item.label || item);
      temp += item.label || item;
    });
    return value;
  }

}
