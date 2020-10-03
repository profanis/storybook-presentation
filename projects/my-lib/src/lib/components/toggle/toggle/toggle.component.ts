import { Component, EventEmitter, Host, Input, Optional, Output } from '@angular/core'
import { ControlValueAccessor, NgControl } from '@angular/forms'

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements ControlValueAccessor {
  /**
   * The state of the toggle. True means "ON", false means "OFF"
   */
  @Input() status: boolean

  /**
   * The label near the toggle button
   */
  @Input() label: string

  /**
   * By default the label position is on right. If set this value to "true", the position will be on left
   */
  @Input() textInLeft: boolean = false

  /**
   * The event that will emit on each state change
   */
  @Output('toggle') _toggle = new EventEmitter<boolean>()

  inputId = Math.random()

  constructor(@Optional() @Host() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this
    }
  }

  onTouched = () => {}
  setDisabledState?(isDisabled: boolean): void {}

  onChange = (value: any) => {
    this.status = value
    this._toggle.emit(value)
  }


  writeValue(status: boolean): void {
    this.status = status
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

}
