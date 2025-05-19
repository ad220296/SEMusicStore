import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Genre {
  id: number;
  name: string;
}

@Component({
  selector: 'app-genre-list',
  standalone: false,
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Genre[]>('https://localhost:7074/api/genres')
      .subscribe({
        next: data => this.genres = data,
        error: err => console.error('Fehler beim Laden der Genres:', err)
      });
  }
}
