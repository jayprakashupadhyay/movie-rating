import {Component} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {MovieListComponent} from './movies/movies-list.component';
import {MovieCreateComponent} from './movies/create/movie-create.component';
import { AboutComponent } from './about/about.component';
import {MovieService} from './movies/movies.service';

@Component({
    selector: 'sz-app',
    template:`
       <div>
       <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                   
                    <li><a [routerLink] = "['Movies']">Movies</a></li>
                    <li><a [routerLink] = "['Create']">Create</a></li>
                    <li><a [routerLink] = "['About']">About</a></li>
                </ul>
            </div>
        </nav>
       <div class='container-fluid'>   
           <router-outlet></router-outlet>
        </div>
       </div>
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [MovieService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
        { path: '/movies', name: 'Movies', component: MovieListComponent, useAsDefault: true },  
        { path: '/create', name: 'Create', component: MovieCreateComponent },  
        { path: '/about', name: 'About', component: AboutComponent }  
]) 
export class AppComponent {
    pageTitle: string = 'Movies Library Dashboard';
    
}