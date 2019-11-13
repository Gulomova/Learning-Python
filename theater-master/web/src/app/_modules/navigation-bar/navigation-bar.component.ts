import { Component, OnInit }                          from '@angular/core';
import { Router }                                     from '@angular/router';

@Component({
    selector: 'navigation-bar',
    templateUrl: 'navigation-bar.component.html',
    styleUrls: ['navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

    mobileMenuSate: boolean = false;

    constructor( private router: Router,) { }

    ngOnInit() {
        this.router.events.subscribe(res => {this.mobileMenuSate = false;});
    }

    showMenu() {
        this.mobileMenuSate = !this.mobileMenuSate;
    }

}
