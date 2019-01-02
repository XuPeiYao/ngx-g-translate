import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { TranslateLayout } from './translateLayout';

declare var google;

@Component({
  selector: 'g-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit, AfterViewInit {
  /**
   * 本頁語言，請參考`https://cloud.google.com/translate/docs/languages`
   */
  @Input()
  pageLanguage = 'en';

  /**
   * 翻譯語言列表，請參考`https://cloud.google.com/translate/docs/languages`
   */
  @Input()
  includedLanguages = ['en', 'ja', 'zh-CN', 'zh-TW'];
  id = '';

  @Input()
  layout = TranslateLayout.SIMPLE;

  constructor() {
    this.id = uuid().replace(/\-/g, '');
  }
  ngAfterViewInit(): void {
    const elementJs = document.createElement('script');
    elementJs.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit_' + this.id;

    document.body.appendChild(elementJs);
  }

  ngOnInit() {
    window['googleTranslateElementInit_' + this.id] = () => {
      return new google.translate.TranslateElement(
        {
          pageLanguage: this.pageLanguage,
          includedLanguages: this.includedLanguages.join(','),
          layout: this.layout
        }, 'google_translate_element_' + this.id);
    };
  }
}
