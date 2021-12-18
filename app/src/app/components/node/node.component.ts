import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-node',
  template: `
    <mat-card>
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>node id:{{nodeId}} works</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
      </mat-card-header>
    </mat-card>
  `,
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() nodeId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
