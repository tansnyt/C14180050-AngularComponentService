import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GlobalVarService } from "../global-var.service";
import { NoteService } from "../note.service";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private varglobal: GlobalVarService
  ) {}

  notes: Array<NoteService> = [];

  ngOnInit() {
    let temp = this.varglobal.getNotes();
    for (let x of temp) {
      console.log(x.getJudul() + " " + x.getFav().toString());
      if (x.getFav() == true) {
        this.notes.push(x);
      }
    }
  }
}
