import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsEditComponent } from './news-edit/news-edit.component';

@NgModule({
  declarations: [
    NewsListComponent,
    NewsAddComponent,
    NewsItemComponent,
    NewsEditComponent
  ],
  imports: [CommonModule]
})
export class NewsModule {}
