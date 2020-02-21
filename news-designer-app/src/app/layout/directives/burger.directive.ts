import {Directive, HostBinding, HostListener, Inject, Input} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Directive({
    selector: '[burger]'
})
export class BurgerDirective {
    @Input('burger')
    isOpen: boolean;

    constructor(
        @Inject(DOCUMENT) private document: Document,
    ){
    }

    @HostListener('click', ['$event'])
    onClick($event){
        if (!this.isOpen) {
            this.document.body.classList.add('sidebar-collapse');
        } else {
            this.document.body.classList.remove(...['sidebar-collapse']);
        }
        this.isOpen = !this.isOpen;
        console.info('clicked: ' + this.isOpen);
    }
}
