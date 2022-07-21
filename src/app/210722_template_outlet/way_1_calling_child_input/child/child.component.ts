import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div style="background-color: green;">
  <h2>Child component</h2>
  <small>this is small string.</small>
  <ng-container *ngTemplateOutlet="customTemplate">
  </ng-container></div>`,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() customTemplate!: TemplateRef<HTMLElement>
  
  constructor() { }
  
  ngOnInit(): void {
  }
 
}
