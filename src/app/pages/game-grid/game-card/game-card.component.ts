import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  @Input() game!: Game;

  @Input() categorie!: string;
  get isRiboon(): boolean {
    console.log(this.categorie);

    return !!this.game.categories.some((cat) => {
      return (
        ('new' === cat && this.categorie !== 'new') ||
        ('top' === cat && this.categorie !== 'top')
      );
    });
  }

  constructor() {}

  ngOnInit(): void {}
  getRibbonLabel(): string {
    return this.game.categories.includes('new') && this.categorie !== 'new'
      ? 'New'
      : 'Top';
  }
}
