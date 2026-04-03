import { Component } from '@angular/core';
import biereData from '../resources/biere.json';

interface Bier {
  name: string;
  brauerei: string;
  ort: string;
  stil: string;
  alkohol: string;
  beschreibung: string;
  preis: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  biere: Bier[] = biereData;
}
