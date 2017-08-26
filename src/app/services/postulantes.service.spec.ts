import { TestBed, inject } from '@angular/core/testing';

import { PostulantesService } from './postulantes.service';

describe('PostulantesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostulantesService]
    });
  });

  it('should be created', inject([PostulantesService], (service: PostulantesService) => {
    expect(service).toBeTruthy();
  }));
});
