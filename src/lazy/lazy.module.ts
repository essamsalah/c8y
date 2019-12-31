import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component1 } from './component1.component';
import { Component2 } from './component2.component';
import { CoreModule } from '@c8y/ngx-components';

@NgModule({
  declarations: [
    Component1,
    Component2
  ],
  imports: [
    NgCommonModule,
    RouterModule.forChild([
      { path: 'one', component: Component1 },
      { path: 'two', component: Component2 },
    ]),
    CoreModule
  ],
  providers: [],
})
export class LazyLoadedModule {}
