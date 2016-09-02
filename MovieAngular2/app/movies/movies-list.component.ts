import {Component, OnInit} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {IMovie} from './movie';
import {MovieService} from './movies.service';
import {MovieFilterPipe} from './movie-filter.pipe';
import { StarComponent } from '../shared/star.component';

@Component({
    selector: 'sz-movies',
    templateUrl: 'app/movies/movies-list.component.html',
    styleUrls: ['app/movies/movies-list.component.css'],  
    pipes: [MovieFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
   
})
export class MovieListComponent implements OnInit {
    pageTitle: string = 'Movie List';   
   
    listFilter: string;
    errorMessage: string;
    movies: IMovie[];


    constructor(private _movieService: MovieService) {

    }

      


    ngOnInit(): void {
        this._movieService.getMovies()
            .subscribe(
            movies => this.movies = movies,
            error => this.errorMessage = <any>error);
    }

}