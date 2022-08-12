import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album, queryResponse } from './dto/items.dto';

@Injectable({
  providedIn: 'root',
})
export class MusicaService {
  private emitChangeSource = new Subject<string>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  constructor(private http: HttpClient) {}
  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5a8ab8eaa7mshf7a363df6597976p15cf74jsn5a73a0e160c6',
      'X-RaidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  };

  buscarCanciones(valor: string) {
    return this.http.get<queryResponse>(
      `${environment.API_URL}/search?q=${valor}`,
      this.options
    );
  }

  obtenerAlbum(id: string) {
    return this.http.get<Album>(
      `${environment.API_URL}/album/${id}`,
      this.options
    );
  }

  emitChange(data: string) {
    this.emitChangeSource.next(data);
  }
}
