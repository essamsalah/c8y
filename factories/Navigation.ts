import { Injectable } from '@angular/core';
import { NavigatorNode, NavigatorNodeFactory, _ } from '@c8y/ngx-components';

@Injectable()
export class ExampleNavigationFactory implements NavigatorNodeFactory {
  // Implement the get()-method, otherwise the ExampleNavigationFactory
  // implements the NavigatorNodeFactory interface incorrectly (!)
  get() {
    const nav: NavigatorNode[] = [];

    /**
     * mandantory for a NavigatorNode is:
     *  - label (string)
     *  - path (string)
     * A click on the NavigatorNode will load the given path and therefore angular loads the
     * specified component (check: ../app.modules.ts)
     */
    nav.push(new NavigatorNode({
      label: _('Hello'),
      icon: 'rocket',
      path: '/hello',
      priority: 100
    }));
    nav.push(new NavigatorNode({
      label: _('World'),
      icon: 'plane',
      path: '/world',
      priority: 99,
      routerLinkExact: false
    }));
    nav.push(new NavigatorNode({
      label: _('Superhero'),
      icon: 'superpowers',
      path: '/superhero',
      priority: 98
    }));
    nav.push(new NavigatorNode({
      label: _('Devices'),
      icon: 'c8y-device',
      path: '/device',
      priority: 97,
      routerLinkExact: false
    }));
    return nav;
  }
}
