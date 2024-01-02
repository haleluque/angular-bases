import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDeletedCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      id: '',
      name: 'Trunks',
      power: 100,
    },
  ];

  onDeleteCharacter(id: string): void {
    this.onDeletedCharacter.emit(id);
  }
}
