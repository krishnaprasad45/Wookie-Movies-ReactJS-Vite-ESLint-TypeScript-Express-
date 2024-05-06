export interface Movie {
    id:string;
    title: string;
    director?: string;
    releaseYear?: number;
    genres: string[];
    actors: string[];
    poster?: string;
    length:string;
    overview:string;
    imdb_rating: number;
    runtime?: number;
  }
  