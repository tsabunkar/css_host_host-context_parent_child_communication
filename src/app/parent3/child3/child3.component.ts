import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {
  @Input() toolTipText;
  @Input() toolTipDelay;
  @Input() toolTipClass;
  @Input() innerHTML;
  @Input() parentStyle;

  constructor() {}

  ngOnInit() {}
}
