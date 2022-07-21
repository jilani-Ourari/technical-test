import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.scss'],
})
export class GameGridComponent implements OnInit {
  games: Game[] = [];
  categorie: string = '';
  constructor(private readonly gameService: GameService) {}
  loadGames(): void {
    this.gameService.selectedGameCategory.subscribe((category) => {
      this.categorie = category;
      if (this.categorie === 'jackpot') {
        this.gameService.getJackpotGames().subscribe((games) => {
          this.games = games;
        });
        return;
      }
      this.gameService.getGames(category).subscribe((games) => {
        this.games = games;
      });
    });
  }

  ngOnInit(): void {
    this.loadGames();
  }
}
