import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data-service/data.service';

@Component({
  selector: 'app-page-switcher',
  templateUrl: './page-switcher.component.html',
  styleUrls: ['./page-switcher.component.css']
})
export class PageSwitcherComponent implements OnInit {
  public pageCount: number;
  constructor(public characterService: DataService) { }

  ngOnInit() {
    this.characterService.getCharactersListById(1)
      .subscribe(data => this.pageCount = data.info.count);
  }

}
