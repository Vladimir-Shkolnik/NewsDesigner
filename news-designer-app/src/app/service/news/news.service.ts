import { Injectable } from '@angular/core';
import { News } from 'src/app/model/news.model';

@Injectable({
  providedIn: 'root'
})
export abstract class NewsService {

  abstract news: News[];

  abstract get(id: number);

  abstract add(): void;

  abstract remove(id: number): void;
}
