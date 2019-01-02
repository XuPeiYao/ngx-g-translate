import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateComponent } from './translate/translate.component';

@NgModule({
  declarations: [TranslateComponent],
  exports: [TranslateComponent],
  imports: [
    CommonModule
  ]
})
export class GTranslateModule { }
