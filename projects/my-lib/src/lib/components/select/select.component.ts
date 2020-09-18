import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {

  /**
   * The items to display on the list
   */
  @Input() items: {[key:string]: string}[]

  /**
   * The event to handle on item select
   */
  @Output() select = new EventEmitter()

  /**
   * It controls whether the select menu is open or not
   */
  isOpen: boolean = false

  /**
   * State of the selected item
   */
  selectedItem: {[key:string]: string}
  constructor(private elementRef: ElementRef) { }

  selectItem(item: {[key:string]: string}) {
    this.selectedItem = item;
    this.isOpen = false
    this.select.emit(item)
  }

  @HostListener('document:click', ['$event'])
  private closeOnDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false
    }
  }
}
