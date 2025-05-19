import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Genre {
  id: number;
  name: string;
}

@Component({
  selector: 'app-genre-edit',
  standalone: false,
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})
export class GenreEditComponent implements OnInit {
  genreId: number | null = null;
  genreName: string = '';

  constructor(private route: ActivatedRoute, 
              private http: HttpClient,
              private router: Router
            ) {}

  ngOnInit(): void {
      const idParam = this.route.snapshot.paramMap.get('id');

      if (!idParam  || idParam === 'new')
      {
        this.genreId = null;
        this.genreName = '';
      }
      else
      {
        this.genreId = Number(idParam);
        if (this.genreId > 0 ) {
        this.http.get<Genre>(`https://localhost:7074/api/genres/${this.genreId}`)
        .subscribe({
          next: data => {
            this.genreName = data.name;
            console.log('Genre geladen:', data);
          },
          error: err => console.error('Fehler beim Laden des genres:', err)
        });
      }
        else {
            console.warn('Ungültige Genre-ID:', this.genreId);
        }
      }
    }
    save(): void {
      const genre: Partial<Genre> = {
        name: this.genreName
      };
      if (this.genreId === null) {
        this.http.post('https://localhost:7074/api/genres', genre).subscribe({
          next: () => {
            console.log('Genre erfolgreich erstellt');
            this.router.navigate(['/genres']);
          },
          error: err => console.error('Fehler beim Erstellen:', err)
        });
      }
      else {
        const genreWithId: Genre = {
          id: this.genreId,
          name: this.genreName
        };
         this.http.put(`https://localhost:7074/api/genres/${this.genreId}`, genreWithId).subscribe({
      next: () => {
        console.log('Genre erfolgreich aktualisiert');
        this.router.navigate(['/genres']);
      },
      error: err => console.error('Fehler beim Speichern:', err)
      });
    }
  }
}
