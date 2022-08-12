import { Component } from '@angular/core';
import {
  Album,
  Track,
} from 'src/app/core/controllers/services/musica/dto/items.dto';
import { MusicaService } from 'src/app/core/controllers/services/musica/musica.service';

@Component({
  selector: 'app-recientes',
  templateUrl: './recientes.component.html',
  styleUrls: ['./recientes.component.scss'],
})
export class RecientesComponent {
  valorDeBusqueda: string;
  Canciones: Track[];
  album: Album;

  constructor(private musicaService: MusicaService) {
    this.valorDeBusqueda = '';
    this.Canciones = [];
  }

  buscarCanciones() {
    this.musicaService
      .buscarCanciones(this.valorDeBusqueda)
      .subscribe((respuesta) => {
        if (!respuesta.error) this.Canciones = respuesta.data;
      });
  }

  seleccionarCancion(cancion: Track) {
    this.musicaService.obtenerAlbum(cancion.album.id).subscribe((album) => {
      if (album.tracks.data) {
        this.album = album;
        this.musicaService.emitChange(album.id);
      }
    });
  }
}
