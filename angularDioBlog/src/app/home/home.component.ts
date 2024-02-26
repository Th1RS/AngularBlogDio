import { Component } from '@angular/core';
import { MenuHeadComponent } from "../menu-head/menu-head.component";
import { MenuTitleComponent } from "../menu-title/menu-title.component";
import { BigCardComponent } from "../big-card/big-card.component";
import { SmallCardComponent } from "../small-card/small-card.component";



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuHeadComponent, BigCardComponent, SmallCardComponent, MenuTitleComponent]
})
export class HomeComponent {

}
