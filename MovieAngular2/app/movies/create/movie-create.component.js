System.register(['angular2/core', '../movie', 'angular2/router', '../movies.service'], function(exports_1, context_1) {
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
    var core_1, movie_1, router_1, movies_service_1;
    var MovieCreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movie_1_1) {
                movie_1 = movie_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (movies_service_1_1) {
                movies_service_1 = movies_service_1_1;
            }],
        execute: function() {
            MovieCreateComponent = (function () {
                function MovieCreateComponent(_moviesService, _router) {
                    this._moviesService = _moviesService;
                    this._router = _router;
                    this.title = 'Create New Movie';
                }
                MovieCreateComponent.prototype.ngOnInit = function () {
                    this.newMovie = new movie_1.Movie;
                };
                MovieCreateComponent.prototype.createMovie = function (event) {
                    var _this = this;
                    this._moviesService.createMovie(this.newMovie)
                        .subscribe(function () {
                        _this._router.navigate(['Movies']);
                    });
                };
                MovieCreateComponent.prototype.cancelCreate = function (event) {
                    this._router.navigate(['Movies']);
                };
                MovieCreateComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/movies/create/movie-create.component.html'
                    }), 
                    __metadata('design:paramtypes', [movies_service_1.MovieService, router_1.Router])
                ], MovieCreateComponent);
                return MovieCreateComponent;
            }());
            exports_1("MovieCreateComponent", MovieCreateComponent);
        }
    }
});
//# sourceMappingURL=movie-create.component.js.map