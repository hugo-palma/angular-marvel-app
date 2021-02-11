import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersPageComponent } from './characters-page/characters-page.component'
import { ComicCardComponent } from './comic-card/comic-card.component';
import { ComicsPageComponent } from './comics-page/comics-page.component';
import { StoriesPageComponent } from './stories-page/stories-page.component';
import { StoryCardComponent } from './story-card/story-card.component';

const routes: Routes = [
  {path: '', redirectTo:'/comics', pathMatch:'full'},
  {path: 'comics', component: ComicsPageComponent, pathMatch: 'full'},
  {path: 'characters', component: CharactersPageComponent, pathMatch: 'full'},
  {path: 'stories', component: StoriesPageComponent, pathMatch: 'full'},
  {path: 'comics/:id', component: ComicCardComponent},
  {path: 'characters/:id', component: CharacterCardComponent},
  {path: 'stories/:id', component: StoryCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
