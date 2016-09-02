System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './movies/movies-list.component', './movies/create/movie-create.component', './about/about.component', './movies/movies.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, movies_list_component_1, movie_create_component_1, about_component_1, movies_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (movies_list_component_1_1) {
                movies_list_component_1 = movies_list_component_1_1;
            },
            function (movie_create_component_1_1) {
                movie_create_component_1 = movie_create_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (movies_service_1_1) {
                movies_service_1 = movies_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Movies Library Dashboard';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'sz-app',
                        template: "\n       <div>\n       <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n                   \n                    <li><a [routerLink] = \"['Movies']\">Movies</a></li>\n                    <li><a [routerLink] = \"['Create']\">Create</a></li>\n                    <li><a [routerLink] = \"['About']\">About</a></li>\n                </ul>\n            </div>\n        </nav>\n       <div class='container-fluid'>   \n           <router-outlet></router-outlet>\n        </div>\n       </div>\n        ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [movies_service_1.MovieService, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/movies', name: 'Movies', component: movies_list_component_1.MovieListComponent, useAsDefault: true },
                        { path: '/create', name: 'Create', component: movie_create_component_1.MovieCreateComponent },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map