import { Component, OnInit, TemplateRef, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<div style="background-color: yellow; padding: 1rem; border: 1px solid black">
    <h1>Parent component</h1>
  <ng-template #parentTemplate>  
    <p style="background-color: red;">
      This Template is defined in Parent. 
      We will send it to child component
    </p>
  </ng-template>
  <app-child [customTemplate]="parentTemplate"></app-child>
  </div>`,
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {

  @ViewChild('parentTemplate') myTemplate!: TemplateRef<HTMLElement>
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.myTemplate)
  }
}
