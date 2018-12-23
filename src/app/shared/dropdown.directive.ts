import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive ({
  selector: '[appToggleDropdown]'
  }
)

export class  DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor() {
  }
  @HostListener('click') toggleList() {
    this.isOpen = !this.isOpen;
  }
/*disappear the clicked dropdown on clicking anywhere
  @HostListener('') toggleListRemove() {
    this.isOpen = !this.isOpen;
  }*/
}
