import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { GameResult } from "../model/game-result";
import {catchError, Observable, retry} from "rxjs";
import {Choice} from "../model/choice";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameApiUrl: string;

  constructor(private http: HttpClient) {
    this.gameApiUrl = environment.apiUrl
  }

  public play(playerChoice: Choice): Observable<GameResult>{
    const index = Object.values(Choice).indexOf(playerChoice);
    let params = new HttpParams().set('playerChoice', Object.keys(Choice)[index]);
    return this.http.post<GameResult>(this.gameApiUrl, {},{params: params});
  }

}
