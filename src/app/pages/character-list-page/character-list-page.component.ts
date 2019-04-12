import {Component} from '@angular/core';
import {DataService} from '../../services/data-service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-character-list-page',
  templateUrl: './character-list-page.component.html',
  styleUrls: ['./character-list-page.component.css']
})
export class CharacterListPageComponent {

  constructor(private dataService: DataService, private router: Router) {
  }

  public navigateTo(id: number) {
    this.router.navigate(['character-item', id]);
  }

}
