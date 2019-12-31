import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule, Routes } from '@angular/router';
import { ExampleActionFactory } from './factories/Action';
import { ExampleBreadcrumbFactory } from './factories/Breadcrumb';
import { ExampleNavigationFactory } from './factories/Navigation';
import { ExampleTabFactory } from './factories/Tab';
import { AwesomeComponent } from './src/awesome/awesome.component';
import { HelloComponent } from './src/hello/hello.component';
import { EssamComponent } from './src/essam/essam.component';
import { OutstandingComponent } from './src/outstanding/outstanding.component';
import { SuperheroComponent } from './src/superhero/superhero.component';
import { SuperheroService } from './src/superhero/superhero.service';
import { WorldComponent } from './src/world/world.component';
import { DevicesComponent } from './src/devices/devices.component';
import {
  CoreModule,
  HOOK_ACTION,
  HOOK_BREADCRUMB,
  HOOK_NAVIGATOR_NODES,
  HOOK_TABS,
  BootstrapComponent,
  RouterModule,
  ViewContext,
  HOOK_ONCE_ROUTE
} from '@c8y/ngx-components';
import { DeviceInfoComponent } from './src/devices/device-info.component';
import { DeviceAlarmsComponent } from './src/devices/device-alarms.component';
import { RandomGuard } from './guards/random.guard';
import { hooks as lazyHooks } from './src/lazy/lazy.hooks';

/**
 * Angular Routes.
 * Within this array at least path (url) and components are linked.
 */
const appRoutes: Routes = [
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: 'world',
    redirectTo: 'world/awesome'
  },
  { path: 'superhero', component: SuperheroComponent },
  {
    path: 'world/awesome',
    component: AwesomeComponent
  },
  {
    path: 'world/outstanding',
    component: OutstandingComponent
  },
  {
    path: 'device',
    component: DevicesComponent
  },
  {
    path: 'essam',
    component: EssamComponent
  },
  {
    path: 'lazy',
    loadChildren: './src/lazy/lazy.module#LazyLoadedModule'
  },
  {
    path: '',
    redirectTo: 'hello',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    HelloComponent,
    EssamComponent,
    WorldComponent,
    AwesomeComponent,
    OutstandingComponent,
    SuperheroComponent,
    DevicesComponent,
    DeviceInfoComponent,
    DeviceAlarmsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ngRouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true }),
    RouterModule.forRoot(),
    // Import the CoreModule to add c8y functionality
    CoreModule.forRoot()
  ],
  /**
   * Use our predefined InjectionTokens and provide your own classes to extend behavior
   * and functionality of existing ones. Implement your own NavigationNodes, Tabs, Actions and Breadcrumbs
   */
  providers: [
    RandomGuard,
    { provide: HOOK_NAVIGATOR_NODES, useClass: ExampleNavigationFactory, multi: true },
    { provide: HOOK_TABS, useClass: ExampleTabFactory, multi: true },
    { provide: HOOK_ACTION, useClass: ExampleActionFactory, multi: true },
    { provide: HOOK_BREADCRUMB, useClass: ExampleBreadcrumbFactory, multi: true },

    /**
     * Route hooks allow you to use routes as child routes on a ViewContext. If used with a context
     * the particular data is resolved automatically and the page is extended by a tab. Contexts
     * are currently Application, Device, Group, Tenant and User. Note: All components used here
     * needs to be used as EntryComponent!
     */
    {
      provide: HOOK_ONCE_ROUTE,
      useValue: [
        {
          path: 'alarms',
          context: ViewContext.Device,
          component: DeviceAlarmsComponent,
          label: 'Alarms',
          priority: 100,
          icon: 'bell'
        },
        {
          path: 'info',
          context: ViewContext.Device,
          component: DeviceInfoComponent,
          label: 'Info',
          priority: 0,
          icon: 'info',
          /**
           * An example of an route guard which randomly activates
           * the child route. See Guards documentation from Angular
           * for more details.
           */
          canActivate: [RandomGuard]
        }
      ],
      multi: true
    },
    SuperheroService,
    ...lazyHooks
  ],
  /**
   * Bootstrap your application with the BootstrapComponent which will use the `<c8y-bootstrap>`
   * component to initialize the root application. Alternatively you can bootstrap
   * a component of your choice and include that tag into its template or only reuse the given components
   */
  bootstrap: [BootstrapComponent],
  /**
   * The EntryComponents to allow the HOOK_ONCE_ROUTE to work.
   */
  entryComponents: [DeviceInfoComponent, DeviceAlarmsComponent]
})
export class AppModule {}
