import { Injectable } from '@angular/core';
import { NavigatorNode, NavigatorNodeFactory, TabFactory, Tab, _ } from '@c8y/ngx-components';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ExampleTabFactory implements TabFactory {
  // Inject the angular Router
  constructor(public router: Router) { }

  // Implement the get()-method, otherwise the ExampleTabFactory
  // implements the TabFactory interface incorrectly (!)
  get() {
    const tabs: Tab[] = [];
    /**
     *  We want to define two tabs:
     *    - Awesome
     *    - Outstanding
     * but these tabs should only displayed if the URL matches
     * something like: .../apps/tutorial-application/#/world/
     */
    if (this.router.url.match(/world/g)) {
      /**
       * mandantory for a Tab is the path (string) and the label (string)
       * A click on the tab will load the given path and therefore angular loads the
       * specified component (check: ../app.modules.ts)
       */
      tabs.push({
        path: 'world/awesome',
        label: _('Awesome'),
        icon: 'angellist'
      } as Tab);

      tabs.push({
        path: 'world/outstanding',
        label: _('Outstanding'),
        icon: 'diamond',
      } as Tab);

      tabs.push({
        path: 'world/outstanding2',
        label: _('Outstanding 2'),
        icon: 'diamond',
      } as Tab);
    }

    return tabs;
  }
}
