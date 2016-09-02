import {Injectable} from 'angular2/core';
import {IMovie} from './movie';
import {Http, RequestOptions , Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable() 
export class MovieService {   
    private _movieUrl = 'http://localhost:53871/api/movies';

    constructor(private _http: Http) { }

    getMovies(): Observable<IMovie[]> {
        return this._http.get(this._movieUrl)
            .map((response: Response) => <IMovie[]>response.json()) //arrow function, tranceform response to json object and is array of IProduct[]
            .do(data => console.log("All: " + JSON.stringify(data))) //for debug
            .catch(this.handleError);
    }


    createMovie(movie: IMovie): Observable<IMovie> {
        let body = JSON.stringify(movie); 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._movieUrl, body, options)               
                .map(this.extractData)
                .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }



}