import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicCardComponent } from './comic-card/comic-card.component';
import { ComicsPageComponent } from './comics-page/comics-page.component';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { StoriesPageComponent } from './stories-page/stories-page.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { StoryCardComponent } from './story-card/story-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicCardComponent,
    ComicsPageComponent,
    CharactersPageComponent,
    StoriesPageComponent,
    CharacterCardComponent,
    StoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
