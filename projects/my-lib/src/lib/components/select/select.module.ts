import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule
  ],
  exports: [SelectComponent]
})
export class SelectModule { }
