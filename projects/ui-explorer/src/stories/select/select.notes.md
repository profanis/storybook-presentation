## **Select Component**

### API

| Name           | Type           |  Required | Description            |
| -------------- | -------------- |  -------- | ---------------------- |
| @Input() items | {key: string, value: any}[]        |  Yes       | The items to display                       |
| @Output() select | {key: string, value: any}        |  No       | Emitted on item select                      |

### Usage

```html
<app-select [items]="items" (select)="onSelect($event)"></app-select>
```


```ts
selected: {[key:string]: string}

items = [
    {key:1, value: 'Greece'}
]

onSelect(selectedItem) {
    this.selected = selectedItem
}
```
