import {Component, OnInit} from '@angular/core';
import {CharacterInterface} from '../../interfaces/character.interface';
import {DataService} from '../../services/data-service/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-character-item-page',
  templateUrl: './character-item-page.component.html',
  styleUrls: ['./character-item-page.component.css']
})
export class CharacterItemPageComponent implements OnInit {
  public character: CharacterInterface;

  constructor(private dataService: DataService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe(param => {
      this.dataService.getCharacterById(+param['id']).subscribe(data => this.character = data);
    });
  }

}
