import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game.model';
@Injectable({ providedIn: 'root' })
export class GameService {
  selectedGameCategory: BehaviorSubject<string> = new BehaviorSubject<string>(
    'top'
  );

  constructor(private readonly http: HttpClient) {}

  getGames(category: string) {
    return this.http
      .get<Game[]>(`http://stage.whgstage.com/front-end-test/games.php`)
      .pipe(
        map((game) => game.filter((game) => game.categories.includes(category)))
      );
  }
}
