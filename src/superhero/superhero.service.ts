import { Injectable } from '@angular/core';
import { _ } from '@c8y/ngx-components';
import { Superhero } from './superhero.model';

/**
 * The SuperheroService holds a list of predefined superheroes.
 * With the help of this service you can add a predefined hero
 * to the array of heroes that should be available and you can remove a hero
 * from this array.
 */
@Injectable()
export class SuperheroService {
    /** Mandantory for a superhero is:
     * - name (string)
     * - gender (string)
     * - power (string)
     */
    herosToDisplay: Superhero[];
    private heros: Superhero[];

    constructor() {
        this.herosToDisplay = [];
        this.heros = [
            {
                name: 'Captain America',
                gender: _('Male'),
                power: _('Mighty warrior with strength, stamina and agility')
            },
            {
                name: 'Spider-Man',
                gender: _('Male'),
                power: _('Climbing vertically and upside down, his speed and superhuman strength')
            },
            {
                name: 'Gamora',
                gender: _('Female'),
                power: _('Extraordinary fighting abilities')
            }
        ];
    }

    // Adds a predefined hero randomly.
    addRandomHero() {
        this.herosToDisplay.push(this.heros[this.getRandomInt(0, this.heros.length - 1)]);
    }

    // Removes a hero with given index.
    removeHero(index: number) {
        if (index >= 0 && index <= this.herosToDisplay.length - 1) {
            this.herosToDisplay.splice(index, 1);
        }
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
