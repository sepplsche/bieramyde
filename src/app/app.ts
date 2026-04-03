import { Component } from '@angular/core';

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
  biere: Bier[] = [
    {
      name: 'Annafest-Bier',
      brauerei: 'Brauerei Hebendanz',
      ort: 'Forchheim',
      stil: 'Festbier',
      alkohol: '5,8 %',
      beschreibung: 'Vollmundiges Festbier mit malzigem Charakter, gebraut für das berühmte Annafest im Kellerwald.',
      preis: '0,5 l — 4,20 €'
    },
    {
      name: 'Lagerbier Hell',
      brauerei: 'Brauerei Greifenklau',
      ort: 'Bamberg',
      stil: 'Helles Lager',
      alkohol: '4,9 %',
      beschreibung: 'Klares, hopfenbetontes Lagerbier aus dem Bamberger Bergbräu-Keller. Erfrischend und trocken.',
      preis: '0,5 l — 3,90 €'
    },
    {
      name: 'Rauchbier Märzen',
      brauerei: 'Brauerei Schlenkerla',
      ort: 'Bamberg',
      stil: 'Rauchbier',
      alkohol: '5,1 %',
      beschreibung: 'Das Ur-Rauchbier Bambergs. Gebraut mit über Buchenholz gedarrtem Malz — unverwechselbar rauchig und tief.',
      preis: '0,5 l — 4,50 €'
    },
    {
      name: 'Zwickl Ungespundet',
      brauerei: 'Brauerei Keesmann',
      ort: 'Bamberg',
      stil: 'Zwickelbier',
      alkohol: '5,3 %',
      beschreibung: 'Naturtrübes, ungespundetes Kellerbier. Feinherb, mit lebendiger Hefe direkt aus dem Lagertank.',
      preis: '0,5 l — 4,10 €'
    },
    {
      name: 'Weizen',
      brauerei: 'Brauerei Weißenohe',
      ort: 'Weißenohe',
      stil: 'Hefeweizen',
      alkohol: '5,4 %',
      beschreibung: 'Fränkisches Klosterweizen mit kräftiger Hefenote, milden Bananearomen und dezenter Würze.',
      preis: '0,5 l — 4,30 €'
    },
    {
      name: 'Vollbier',
      brauerei: 'Brauerei Rittmayer',
      ort: 'Hallerndorf',
      stil: 'Kellerbier',
      alkohol: '5,0 %',
      beschreibung: 'Klassisches fränkisches Kellerbier vom Haag. Ungefiltert, bernsteinfarben, mit erdiger Hopfenbittere.',
      preis: '0,5 l — 3,80 €'
    },
    {
      name: 'Export Dunkel',
      brauerei: 'Brauerei Friedel',
      ort: 'Schnaid',
      stil: 'Dunkles Export',
      alkohol: '5,2 %',
      beschreibung: 'Dunkles, malzbetontes Exportbier mit Noten von Karamell und Röstmalz. Weich am Gaumen.',
      preis: '0,5 l — 4,00 €'
    },
    {
      name: 'Bock Hell',
      brauerei: 'Brauerei Göller',
      ort: 'Zeil am Main',
      stil: 'Heller Bock',
      alkohol: '7,2 %',
      beschreibung: 'Kräftiger heller Bock aus der Mainbogenbrauerei. Vollmundig, süffig, mit warmer Malzsüße.',
      preis: '0,33 l — 4,50 €'
    }
  ];
}
