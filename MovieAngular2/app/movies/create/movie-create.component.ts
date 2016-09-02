import {Component, OnInit} from 'angular2/core';

import {IMovie, Movie} from '../movie';
import {Router} from 'angular2/router';
import {MovieService} from '../movies.service';

@Component({
    templateUrl: 'app/movies/create/movie-create.component.html'
})

export class MovieCreateComponent implements OnInit {
    title: string = 'Create New Movie';
    newMovie: IMovie;

    constructor(
        private _moviesService: MovieService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.newMovie = new Movie;
    }

    createMovie(event) {
        let _this = this;

        this._moviesService.createMovie(this.newMovie)
            .subscribe(function () {
                _this._router.navigate(['Movies']);
            });
    }

    cancelCreate(event) {
        this._router.navigate(['Movies']);
    }

}