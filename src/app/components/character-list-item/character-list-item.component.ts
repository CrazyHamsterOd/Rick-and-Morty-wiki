import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CharacterInterface} from '../../interfaces/character.interface';

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.css']
})
export class CharacterListItemComponent {
  @Input() id: number;
  @Input() character: CharacterInterface;
  @Output() viewInfo = new EventEmitter<number>();
}
