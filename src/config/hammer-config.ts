import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override overrides = {};

  constructor() {
    super();
    if (typeof window !== 'undefined') {
      import('hammerjs').then(Hammer => {
        this.overrides = {
          swipe: { direction: Hammer.DIRECTION_HORIZONTAL }
        };
      });
    }
  }
}
