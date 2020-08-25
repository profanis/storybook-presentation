import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @Input() items: {[key:string]: string}[]
  @Output() select = new EventEmitter()

  isOpen = false
  selectedItem: any
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
