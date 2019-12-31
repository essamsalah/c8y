import { _ } from '@c8y/ngx-components';
import { Component } from '@angular/core';

/**
 * The hello.component shows a short introduction text and
 * a little list of things that you can discover within this
 * tutorial application.
 */
@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent {
  introductionText: string;
  featureList: string[];
  constructor() {
    // _ annotation to mark this string as translatable string.
    this.introductionText = _('... this basic Application will show you some concepts and components about the:');
    this.featureList = [
      _('Navigator (panel on the left)'),
      _('Tabs (within World-page)'),
      _('Breadcrumbs (below the c8y-title)'),
      _('Global actions (top right corner (+)-Button)'),
      _('Local actions (within Superhero-page)'),
      _('Fetching data (within Device-page)')
    ];
  }
}
