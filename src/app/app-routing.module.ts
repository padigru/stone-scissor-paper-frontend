import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameComponent} from "./game/game.component";
import {ResultComponent} from "./result/result.component";

const routes: Routes = [
  { path: '', redirectTo: 'play', pathMatch:'full' },
  { path: 'result', component: ResultComponent},
  { path: 'play', component: GameComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
