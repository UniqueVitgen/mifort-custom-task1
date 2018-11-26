import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CarouselModule.forRoot()
  ],
  declarations: [],
  exports: [
    CarouselModule
  ]
})
export class AngularBootstrapModule { }
