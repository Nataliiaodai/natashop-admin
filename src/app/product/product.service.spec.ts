import { TestBed } from '@angular/core/testing';

import { ProductEditService } from './product.service';

describe('ProductService', () => {
  let service: ProductEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
