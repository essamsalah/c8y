import { NavigatorNode, HOOK_NAVIGATOR_NODES } from '@c8y/ngx-components';

const root = new NavigatorNode({
  label: 'Lazy loaded',
  icon: 'hourglass-start'
});

root.add(new NavigatorNode({
  path: '/lazy/one',
  label: 'One',
  icon: 'thermometer'
}));

root.add(new NavigatorNode({
  path: '/lazy/two',
  label: 'Two',
  icon: 'thermometer-3'
}));

export const hooks = [
  { provide: HOOK_NAVIGATOR_NODES, useValue: { get: () => root }, multi: true}
];
