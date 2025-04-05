import { Component, ViewEncapsulation } from '@angular/core';
import { MainSearchComponent } from "../main-search/main-search.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainSearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  exportAs: 'appHeader',
})
export class HeaderComponent {

}
