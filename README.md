# NgxGTranslate

For Angular 7.x+, Google translate button wrapper package.

## Get Started

### Import Module
```typescript
import { GTranslateModule } from 'ngx-g-translate';

@NgModule({
  declarations: [
    // ...something...
  ],
  imports: [
    // ...something...,
    GTranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Use Component
```html
...something...
<g-translate 
  pageLanguage="en" // This page language
  [includedLanguages]="['en','ja','zh-CN','zh-TW']" // Can use languages
>
</g-translate>
...something...
```

### Demo
![Imgur](https://i.imgur.com/GjcXo0U.png)