import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {GameResult} from "../model/game-result";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  gameResult: GameResult;

  constructor(private router: Router) {
    // @ts-ignore
    this.gameResult = this.router.getCurrentNavigation().extras.state
    if (this.gameResult == undefined) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
  }

}
