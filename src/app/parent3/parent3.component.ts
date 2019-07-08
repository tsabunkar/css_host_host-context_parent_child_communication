import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.scss']
})
export class Parent3Component implements OnInit {
  constructor() {}

  @Input() toolTipText = 'Preset1';
  @Input() toolTipDelay = 800;
  @Input() innerHTML = '1';
  isPresetActive = false;

  myStyles = {
    'background-color': '#f3f3f3',
    color: '#242424',
    width: '40px',
    height: '40px'
  };
  myStyles2 = {
    'background-color': '#1000f3',
    color: '#242424',
    width: '40px',
    height: '40px'
  };

  ngOnInit() {}

  onPresetClick(): void {
    console.log('CLick function is invoked');
    console.log(this.isPresetActive);
    this.isPresetActive = !this.isPresetActive;
  }
}
