import { Component, OnInit } from '@angular/core';
import {NodeComponent} from '../node/node.component';

@Component({
  selector: 'app-server-view',
  templateUrl: './server-view.component.html',
  styleUrls: ['./server-view.component.scss']
})
export class ServerViewComponent implements OnInit {

  nodeIds = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

}
