import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Artist {
  id: number;
  name: string;
  genreId: number;
}

interface Genre {
  id: number;
  name: string;
}

@Component({
  selector: 'app-artist-list',
  standalone: false,
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css'] 
})
export class ArtistListComponent implements OnInit {
  artists: Artist[] = [];
  genres: Genre[] = [];
  genreId: number | null = null; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadArtists();
    this.loadGenres();
  }

  loadArtists(): void {
    this.http.get<Artist[]>('https://localhost:7074/api/artists')
      .subscribe({
        next: data => this.artists = data,
        error: err => console.error('Fehler beim Laden der Artists:', err)
      });
  }

  loadGenres(): void {
    this.http.get<Genre[]>('https://localhost:7074/api/genres')
      .subscribe({
        next: data => this.genres = data,
        error: err => console.error('Fehler beim Laden der Genres:', err)
      });
    }
    
    getGenreName(genreId: number): string {
    const genre = this.genres.find(g => g.id === genreId);
    return genre ? genre.name : 'Unbekannt';
  }
}
