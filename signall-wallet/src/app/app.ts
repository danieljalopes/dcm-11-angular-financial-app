import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { PageWrapper } from './layout/page-wrapper/page-wrapper';

@Component({
  imports: [Header, Footer, PageWrapper],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('signall-wallet');

}
