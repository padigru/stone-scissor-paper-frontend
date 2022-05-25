import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../service/game.service";
import {Choice} from "../model/choice";
import {GameResult} from "../model/game-result";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameResult: GameResult | undefined;
  errorMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,

  ) { }

  playGame(playerChoice: string) {
    // @ts-ignore
    let choice = Choice[playerChoice];
      this.gameService.play(choice).subscribe({next: (data) => {
        this.gameResult = data;
        this.router.navigate(['/result'], {state: this.gameResult});
      }, error: (err) =>{
        this.errorMessage = 'Leider ist ein Fehler aufgetreten.'
        }});
  }

  ngOnInit(): void {
  }

}
