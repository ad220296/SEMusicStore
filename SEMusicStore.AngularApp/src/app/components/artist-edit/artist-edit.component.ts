import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Interface für besseren Überblick (optional, aber empfohlen)
interface Artist {
  id: number;
  name: string;
  genreId: number;
}

@Component({
  selector: 'app-artist-edit',
  standalone: false,
  templateUrl: './artist-edit.component.html',
  styleUrl: './artist-edit.component.css'
})
export class ArtistEditComponent implements OnInit {
  artistId: number | null = null;
  artistName: string = '';
  selectedGenreId: number | null = null;
  genres: { id: number; name: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    this.loadGenres();

    if (!idParam || idParam === 'new') {
      this.artistId = null;
      this.artistName = '';
      this.selectedGenreId = null;
    } else {
      this.artistId = Number(idParam);
      this.http.get<Artist>(`https://localhost:7074/api/artists/${this.artistId}`)
        .subscribe({
          next: data => {
            this.artistName = data.name;
            this.selectedGenreId = data.genreId;           
          },
          error: err => console.error('Fehler beim Laden des Artists:', err)
        });
    }
  }
  loadGenres(): void {
    this.http.get<{id: number; name: string }[]>('https://localhost:7074/api/genres').subscribe({
      next: data => this.genres = data,
      error: err => console.error('Fehler beim Laden der Genres:', err)
    });
  }

  save(): void {
    if (!this.artistName || !this.selectedGenreId) {
    alert('Bitte gib einen Namen ein und wähle ein Genre aus.');
    return;
  }
    const artist: Partial<Artist> = {
      name: this.artistName,
      genreId: this.selectedGenreId ?? 0
    };

    if (this.artistId === null) {
      this.http.post('https://localhost:7074/api/artists', artist).subscribe({
        next: () => {
          console.log('Artist erfolgreich erstellt');
          this.router.navigate(['/artists']);
        },
        error: err => console.error('Fehler beim Erstellen:', err)
      });
    } else {
      const artistWithId: Artist = {
        id: this.artistId,
        name: this.artistName,
        genreId: this.selectedGenreId ?? 0
      };
      this.http.put(`https://localhost:7074/api/artists/${this.artistId}`, artistWithId).subscribe({
        next: () => {
          console.log('Artist erfolgreich aktualisiert');
          this.router.navigate(['/artists']);
        },
        error: err => console.error('Fehler beim Speichern:', err)
      });
    }
  }
}
