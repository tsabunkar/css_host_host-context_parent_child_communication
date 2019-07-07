import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() toolTipText;
  @Input() toolTipDelay;
  @Input() toolTipClass;
  @Input() innerHTML;
  constructor() {}

  ngOnInit() {}
}
