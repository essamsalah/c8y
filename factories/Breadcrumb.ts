import { Injectable } from '@angular/core';
import { BreadcrumbFactory, BreadcrumbItem, Breadcrumb, _ } from '@c8y/ngx-components';
import { Router } from '@angular/router';

/**
 * A breadcrumb is a type of secondary navigation scheme that reveals the user’s location
 * in the application.
 */
@Injectable()
export class ExampleBreadcrumbFactory implements BreadcrumbFactory {
    // Inject the angular Router
    constructor(private router: Router) { }

    // Implement the get()-method, otherwise the ExampleBreadcrumbFactory
    // implements the BreadcrumbFactory interface incorrectly (!)
    get() {
        // Mandantory for a Breadcrumb is an array of BreadcrumbItem
        const breadcrumb: Breadcrumb = { items: [] };
        // Mandantory for a BreadcrumbItem is:
        //  - path (string)
        //  - label (string)
        const breadcrumbItems: BreadcrumbItem[] = [];

       /**
        * Use angulars router to decide if breadcrumbs should be shown.
        * The following breadcrumbs are displayed if the URL matches
        * something like: .../apps/tutorial-application/#/world/
        */
        if (this.router.url.match(/world/g)) {
            breadcrumbItems.push({
                label: _('World'),
                icon: 'plane',
                path: '/world'
            });

            // if the URL is: .../apps/tutorial-application/#/world/awesome
            // we add another breadcrumb to show!
            if (this.router.url.match(/awesome/g)) {
                breadcrumbItems.push({
                    label: _('Awesome'),
                    path: '/world/awesome'
                });
            }

            // if the URL is: .../apps/tutorial-application/#/world/outstanding
            // we add another breadcrumb to show!
            if (this.router.url.match(/outstanding/g)) {
                breadcrumbItems.push({
                    label: _('Outstanding'),
                    path: '/world/outstanding'
                });
            }
        }

        breadcrumb.items = breadcrumbItems;
        return breadcrumb;
    }
}
