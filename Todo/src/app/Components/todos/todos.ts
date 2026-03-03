import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {

} 
