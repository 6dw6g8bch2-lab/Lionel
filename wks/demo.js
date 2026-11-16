"use strict";
/* Leerer Startzustand: wird angezeigt, solange die App nicht entsperrt ist oder noch keine Unterlagen verarbeitet sind.
   Enthält nur Lionels Fächer, keine Beispielinhalte. */
const DEMO_VAULT = {v:1, erstellt:"", status:null,
  faecher:[{id:"wirtschaft", name:"Wirtschaft", farbe:0, reihenfolge:1}, {id:"englisch", name:"Englisch", farbe:4, reihenfolge:2}, {id:"technologie", name:"Technologie", farbe:6, reihenfolge:3}, {id:"deutsch", name:"Deutsch", farbe:1, reihenfolge:4}, {id:"franzoesisch", name:"Französisch", farbe:2, reihenfolge:5}],
  themen:[], karten:[], termine:[]};
