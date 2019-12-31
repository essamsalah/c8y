import { _ } from '@c8y/ngx-components';
import { Component } from '@angular/core';

/**
 * The hello.component shows a short introduction text and
 * a little list of things that you can discover within this
 * tutorial application.
 */
@Component({
  selector: 'essam',
  templateUrl: './essam.component.html'
})
export class EssamComponent {
  introductionText: string;
  featureList: string[];
  constructor() {
    // _ annotation to mark this string as translatable string.
    this.introductionText = _('Hi, this is essam');
    this.featureList = [
      _('IoT'),
      _('DevOps'),
      _('Data & Analytics'),
      _('Global actions (top right corner (+)-Button)')
    ];
  }
}
