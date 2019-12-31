import { Injectable } from '@angular/core';
import { ActionFactory, Action, _ } from '@c8y/ngx-components';
import { Superhero } from '../src/superhero/superhero.model';
import { Router } from '@angular/router';
import { SuperheroService } from '../src/superhero/superhero.service';

/**
 * Actions are available through a button (+) within the header.
 * The actions button is always visible within the header.
 */
@Injectable()
export class ExampleActionFactory implements ActionFactory {
    // Inject the angular Router and custom SuperheroService
    constructor(private router: Router, private superheroService: SuperheroService) { }

    // Implement the get()-method, otherwise the ExampleActionFactory
    // implements the ActionFactory interface incorrectly (!)
    get() {
        // You can have more than one action
        // The actions button is rendered as a dropdown of buttons
        const actions: Action[] = [];
        // Mandantory for an Action is just a label (string)
        let addSuperhero: Action;

        addSuperhero = {
            label: _('Add Superhero'),
            // provide a method that you want to get called if the button
            // is clicked
            action: () => this.superheroService.addRandomHero(),
            // In this case the button is disabled by default
            disabled: true
        };

        // Only if the URL matches: .../apps/tutorial-application/#/superhero
        // the actions-button is enabled and the user can click it.
        if (this.router.url.match(/superhero/g)) {
            addSuperhero.disabled = false;
        }

        actions.push(addSuperhero);
        return actions;
    }
}
