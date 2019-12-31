import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'device-alarms',
  templateUrl: './device-alarms.component.html'
})
export class DeviceAlarmsComponent {
  constructor(public route: ActivatedRoute) {}
}
