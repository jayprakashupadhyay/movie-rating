export interface IMovie {
    movieId: number;
    title: string;
    genre: string;
    classification: string;
    releaseDate: number;
    rating: number;
    cast: string[];

}


export class Movie implements IMovie {
    movieId: number;
    title: string;
    genre: string;
    classification: string;
    releaseDate: number;
    rating: number;
    cast: string[];
}