import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component implements OnInit {
  @Input() toolTipText = 'Preset1';
  @Input() toolTipDelay = 800;
  @Input() innerHTML = '1';
  preset1Value = false;
  constructor() {}

  ngOnInit() {}

  onPresetClick(): void {
    console.log('CLick function is invoked');
    console.log(this.preset1Value);
    this.preset1Value = !this.preset1Value;
  }
}
