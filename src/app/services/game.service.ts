import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, mergeMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game, Jackpot } from '../models/game.model';
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
        map((game) =>
          game.filter((game) =>
            category === 'other'
              ? game.categories.some((cat) =>
                  ['ball', 'virtual', 'fun'].includes(cat)
                )
              : game.categories.includes(category)
          )
        )
      );
  }

  getAllGames() {
    return this.http.get<Game[]>(
      `http://stage.whgstage.com/front-end-test/games.php`
    );
  }
  getJackpotGames() {
    return this.http
      .get<Jackpot[]>('http://stage.whgstage.com/front-end-test/jackpots.php')
      .pipe(
        mergeMap((jackpot) =>
          this.getAllGames().pipe(
            map((games) =>
              games.filter((game) =>
                jackpot.some((jackpot) => jackpot.game === game.id)
              )
            ),
            map((games) =>
              games.map((game) => ({
                ...game,
                amount: jackpot.find((j) => j.game === game.id)?.amount,
              }))
            )
          )
        ),
        tap((games) => console.log(games))
      );
  }
}
