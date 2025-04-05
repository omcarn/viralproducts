import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-main-search',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatIconModule, MatButtonModule],
  templateUrl: './main-search.component.html',
  styleUrl: './main-search.component.scss'
})
export class MainSearchComponent {

  value : string = '';
}
