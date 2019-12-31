import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'device-info',
  templateUrl: './device-info.component.html'
})
export class DeviceInfoComponent {
  constructor(public route: ActivatedRoute) {}
}
