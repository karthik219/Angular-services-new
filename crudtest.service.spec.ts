import { TestBed } from '@angular/core/testing';

import { CrudtestService } from './crudtest.service';

describe('CrudtestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudtestService = TestBed.get(CrudtestService);
    expect(service).toBeTruthy();
  });
});
