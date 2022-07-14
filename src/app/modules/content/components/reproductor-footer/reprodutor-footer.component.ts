import { Component } from '@angular/core';
import { Album } from 'src/app/core/controllers/services/musica/dto/items.dto';
import { MusicaService } from 'src/app/core/controllers/services/musica/musica.service';

@Component({
  selector: 'app-reprodutor-footer',
  templateUrl: './reprodutor-footer.component.html',
  styleUrls: ['./reproductor-footer.component.scss']
})
export class ReproductorFooterComponent {

  disabled: boolean
  volumen: number
  album: Album
  indiceCancion: number
  indiceMaximoCancion: number
  audio: any

  constructor(private musicaService: MusicaService) {
    this.audio = new Audio()
    musicaService.changeEmitted$
      .subscribe((albumId) => {
        this.indiceCancion = 0
        this.cargarAlbum(albumId)
      })
    this.disabled = true
    this.audio.addEventListener('ended', () => { this.siguienteCancion() })
    this.volumen = 30
  }

  cargarAlbum(albumId: string) {
    this.musicaService.obtenerAlbum(albumId)
      .subscribe((album) => {
        if (album.tracks.data) {
          this.disabled = false
          this.album = album
          this.indiceMaximoCancion = this.album.tracks.data.length - 1
          this.audio.src = this.album.tracks.data[this.indiceCancion].preview
          this.audio.autoplay = true
          this.audio.volume = this.volumen / 100
        }
      })
  }

  siguienteCancion() {
    this.indiceCancion++
    if (this.indiceCancion > this.indiceMaximoCancion) this.indiceCancion = 0
    this.audio.src = this.album.tracks.data[this.indiceCancion].preview
    this.audio.play()
  }

  anteriorCancion() {
    this.indiceCancion--
    if (this.indiceCancion < 0) this.indiceCancion = this.indiceMaximoCancion
    this.audio.src = this.album.tracks.data[this.indiceCancion].preview
    this.audio.play()
  }

  playPause() {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  volumenCambio() {
    this.audio.volume = this.volumen / 100
  }

}
