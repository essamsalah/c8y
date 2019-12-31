import { Component } from '@angular/core';
import { _ } from '@c8y/ngx-components';
import { Superhero } from './superhero.model';
import { SuperheroService } from './superhero.service';

@Component({
  selector: 'super-hero',
  templateUrl: './superhero.component.html'
})
export class SuperheroComponent {
    informationText: string = '';
    superheros: Superhero[];

    // Inject SuperheroService
    constructor(private superheroService: SuperheroService) {
        this.informationText = _('Use the global actions (top right corner) to add a random superhero :)');
        this.superheros = this.superheroService.herosToDisplay;
    }

    // removes always the last superhero
    removeHero() {
        this.superheroService.removeHero(this.superheros.length - 1);
    }
}
