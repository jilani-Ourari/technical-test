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
  get isRibbon(): boolean {
    return !!this.game.categories.some((cat) => {
      return (
        ('new' === cat && this.categorie !== 'new') ||
        ('top' === cat && this.categorie !== 'top')
      );
    });
  }
  get isJackpot(): boolean {
    return this.categorie === 'jackpot';
  }

  constructor() {}

  ngOnInit(): void {}
  getRibbonLabel(): string {
    return this.game.categories.includes('new') && this.categorie !== 'new'
      ? 'New'
      : 'Top';
  }
}
