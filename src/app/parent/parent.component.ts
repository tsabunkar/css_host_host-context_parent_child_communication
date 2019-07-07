import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @Input() toolTipText = 'Preset1';
  @Input() toolTipDelay = 800;
  @Input() innerHTML = '1';
  constructor() {}

  ngOnInit() {}
}
