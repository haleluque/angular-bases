import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Kriling',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 5500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7000,
    },
  ];

  onAddCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };
    this.characters = [...this.characters, newCharacter];
  }

  onDeleteCharacter(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
