import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor() { }

  getData() {
    return [
      {
        id: '1',
        primaryTitle: 'Gone Girl',
        originalTitle: 'Gone Girl',
        startYear: '2010',
        genre: 'Drama'
      },
      {
        id: '2',
        primaryTitle: 'Fight Club',
        originalTitle: 'Fight Club',
        startYear: '1999',
        genre: 'Action'
      },
      {
        id: '3',
        primaryTitle: 'Seven',
        originalTitle: 'Se7en',
        startYear: '2020',
        genre: 'Crime'
      },
    ]
  }
}
