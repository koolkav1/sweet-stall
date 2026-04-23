import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { Footer } from './components/footer/footer';
import { SiteService } from './services/site.service';


@Component({
  imports: [RouterModule, NavBar, Footer],
  providers: [SiteService],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'sweet-stall';
}
