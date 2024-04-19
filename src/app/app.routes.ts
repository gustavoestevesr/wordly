import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'shop',
    title: 'Shop',
    loadComponent: () =>
      import('./pages/shop/shop.component').then((c) => c.ShopComponent),
  },
  {
    path: 'ranking',
    title: 'Ranking',
    loadComponent: () =>
      import('./pages/ranking/ranking.component').then(
        (c) => c.RankingComponent
      ),
  },
  {
    path: 'daily-word',
    title: 'Daily Word',
    loadComponent: () =>
      import('./pages/daily-word/daily-word.component').then(
        (c) => c.DailyWordComponent
      ),
  },
  {
    path: 'game',
    title: 'Game',
    loadComponent: () =>
      import('./pages/game/game.component').then((c) => c.GameComponent),
  },
];
