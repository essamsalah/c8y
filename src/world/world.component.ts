import { Component } from '@angular/core';
import { NavigatorService, NavigatorNode } from '@c8y/ngx-components';

@Component({
  selector: 'world',
  templateUrl: './world.component.html'
})
export class WorldComponent {
    constructor() {
        console.log('...');
    }
}
