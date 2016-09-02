System.register(['angular2/core', 'angular2/router', './movies.service', './movie-filter.pipe', '../shared/star.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, movies_service_1, movie_filter_pipe_1, star_component_1;
    var MovieListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (movies_service_1_1) {
                movies_service_1 = movies_service_1_1;
            },
            function (movie_filter_pipe_1_1) {
                movie_filter_pipe_1 = movie_filter_pipe_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            }],
        execute: function() {
            MovieListComponent = (function () {
                function MovieListComponent(_movieService) {
                    this._movieService = _movieService;
                    this.pageTitle = 'Movie List';
                }
                MovieListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._movieService.getMovies()
                        .subscribe(function (movies) { return _this.movies = movies; }, function (error) { return _this.errorMessage = error; });
                };
                MovieListComponent = __decorate([
                    core_1.Component({
                        selector: 'sz-movies',
                        templateUrl: 'app/movies/movies-list.component.html',
                        styleUrls: ['app/movies/movies-list.component.css'],
                        pipes: [movie_filter_pipe_1.MovieFilterPipe],
                        directives: [star_component_1.StarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [movies_service_1.MovieService])
                ], MovieListComponent);
                return MovieListComponent;
            }());
            exports_1("MovieListComponent", MovieListComponent);
        }
    }
});
//# sourceMappingURL=movies-list.component.js.map