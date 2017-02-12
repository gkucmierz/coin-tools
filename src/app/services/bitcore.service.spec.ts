/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BitcoreService } from './bitcore.service';

describe('BitcoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitcoreService]
    });
  });

  it('should ...', inject([BitcoreService], (service: BitcoreService) => {
    expect(service).toBeTruthy();
  }));
});
