import { Author } from './../../model/author.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AuthorService {

  abstract author: Author[];

  abstract get(id: number);

  abstract add(): void;

  abstract remove(id: number): void;
}
