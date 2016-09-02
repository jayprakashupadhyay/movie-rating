import { Component, OnInit, Input} from 'angular2/core';
@Component({
    selector: 'sz-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnInit {
    @Input() rating: number;
    starWidth: number;
    ngOnInit(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}