import { Component, Input, numberAttribute, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  // inputs
  @Input() color: string;
  @Input({ required: true }) text: string;

  // methods
  onClick(): void {
    console.log("heyaa");
    alert("yoo");
  }

}
