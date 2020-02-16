import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorAddComponent } from './author-add/author-add.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorItemComponent } from './author-item/author-item.component';
import { AuthorListComponent } from './author-list/author-list.component';

@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorItemComponent,
    AuthorEditComponent,
    AuthorAddComponent
  ],
  imports: [CommonModule]
})
export class AuthorModule {}
