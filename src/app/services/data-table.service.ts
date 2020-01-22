import { Injectable } from '@angular/core';

import { data } from '../models/data'

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor() { }

  getData() {
    return data;
  }
}
