import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterListItemComponent } from './components/character-list-item/character-list-item.component';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { PageSwitcherComponent } from './components/page-switcher/page-switcher.component';
import { CharacterListPageComponent } from './pages/character-list-page/character-list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import {Route, RouterModule} from '@angular/router';
import { CharacterItemPageComponent } from './pages/character-item-page/character-item-page.component';

const routers: Route[] = [
  {path: '', component: HomePageComponent},
  {path: 'character-list', component: CharacterListPageComponent},
  {path: 'character-item/:id', component: CharacterItemPageComponent},
  {path: '**', component: NotFoundPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CharacterListItemComponent,
    ListComponent,
    PageSwitcherComponent,
    CharacterListPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    CharacterItemPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
