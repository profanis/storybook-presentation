## **Toggle Component**


### With reactive forms

```html
<form [formGroup]="form">
  <app-toggle formControlName="toggle1"></app-toggle>
</form>
```

### With ngModel and text in left

```html
<form>
  <app-toggle [(ngModel)]="status" [label]="'Toggle me'" [textInLeft]="true"></app-toggle>
</form>
```

### Without Form bindings

```html
<app-toggle [status]="noFormStatus" (toggle)="noFormStatus = $event" [label]="'Toggle me'" [textInLeft]="true"></app-toggle>
```
