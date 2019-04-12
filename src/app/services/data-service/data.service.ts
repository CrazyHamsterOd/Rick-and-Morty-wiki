import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {CharacterInterface} from '../../interfaces/character.interface';
import {CharactersPageInterface} from '../../interfaces/characters-page.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) {
  }

  public getCharacterById(id: number): Observable<CharacterInterface> {
    return this.http.get<CharacterInterface>('https://rickandmortyapi.com/api/character/' + id);
  }

  public getCharactersListById(id: number): Observable<CharactersPageInterface> {
    return this.http.get<CharactersPageInterface>('https://rickandmortyapi.com/api/character/?page=' + id);
  }
}
