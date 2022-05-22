import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameComponent} from "./game/game.component";
import {ResultComponent} from "./result/result.component";

const routes: Routes = [
  { path: '', redirectTo: 'play', pathMatch: 'full'},
  { path: 'result', component: ResultComponent},
  { path: '**', redirectTo: 'play', pathMatch: 'full'},
  { path: 'play', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
