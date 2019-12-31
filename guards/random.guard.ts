import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class RandomGuard implements CanActivate {
  private random = Math.random() > 0.5;

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.random;
  }
}
