import { Component, OnInit } from '@angular/core';
import { InventoryService, IManagedObject } from '@c8y/client';
import { Observable } from 'rxjs';

@Component({
  selector: 'cmp-lazy1',
  template: `<c8y-title>{{'Groups' | translate}}</c8y-title>

<c8y-action-bar-item [placement]="'right'">
  <button class="btn btn-link" (click)="hi()">
      <i class="fa fa-times"></i> {{ 'Save' | translate}}
  </button>
</c8y-action-bar-item>

<p *ngFor="let o of mos">
  {{o.id}} - {{o.name}}
</p>
  `,
  styles: [``]
})
export class Component1 {
  mos: any[];
  constructor(
    private inventory: InventoryService
  ) {
    this.fetch();
  }
  hi() {
    alert('Save was clicked');
  }
  async fetch() {
    const { data } = await this.inventory.list({ type: 'c8y_DeviceGroup', pageSize: 100 });
    this.mos = data;
  }
}
