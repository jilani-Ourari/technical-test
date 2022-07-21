import { Component, OnInit } from '@angular/core';
import { NavElement } from 'src/app/models/nav.model';
import { GameService } from 'src/app/services/game.service';
import { NAV_ROUTES } from './nav.routes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navbarElements: NavElement[] = NAV_ROUTES;
  selectedNavItem: NavElement = NAV_ROUTES[0];

  constructor(private readonly gameService: GameService) {}

  ngOnInit(): void {}
  selectNavItem(navItem: NavElement): void {
    this.gameService.selectedGameCategory.next(navItem.name);
    this.selectedNavItem = navItem;
  }
}
