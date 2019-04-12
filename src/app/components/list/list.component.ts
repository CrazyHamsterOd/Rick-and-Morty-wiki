import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {CharacterInterface} from '../../interfaces/character.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent<T> implements OnInit {
  @Input() stream: Observable<T>;
  @Input() template: TemplateRef<T>;
  public items: CharacterInterface[];

  ngOnInit(): void {
    this.stream.subscribe(data => this.items = data['results']);
  }
}
