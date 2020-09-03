import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './select-doc.component.html',
  styleUrls: ['./select-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectDocComponent {

  items = [
    {key:1, value: 'Greece'},
    {key:2, value: 'Poland'},
    {key:3, value: 'Netherlands'},
    {key:4, value: 'Italy'},
  ]
  selected: {[key:string]: string}

  constructor() { }

  onSelect(selectedItem) {
    this.selected = selectedItem
  }

}
