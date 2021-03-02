import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GlobalVarService } from "../global-var.service";
import { NoteService } from "../note.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private varglobal: GlobalVarService
  ) {}

  param: string;
  datanote: NoteService;
  judul;
  fav: boolean;

  ngOnInit() {
    let notes = this.varglobal.getNotes();
    let isijudul = this.router.snapshot.paramMap.get("judul");
    this.judul = "note tidak ditemukan";
    for (let note of notes) {
      if (note.getJudul() == isijudul) {
        this.datanote = note;
        this.fav = note.getFav();
        document.getElementById("judul").innerHTML = note.getJudul();
        document.getElementById("isi").innerHTML = note.getIsi();
        document.getElementById(
          "tanggal"
        ).innerHTML = note.getTanggal().toString();

        break;
      } else {
        document.getElementById("judul").innerHTML = "note tidak ditemukan";
      }
    }
  }

  addToFav() {
    if (document.getElementById("btnFav").innerText == "Add to Favorite") {
      this.datanote.setFav(true);
      document.getElementById("btnFav").innerText = "Remove from Favorite";
    } else {
      this.datanote.setFav(false);
      document.getElementById("btnFav").innerText = "Add to Favorite";
    }
  }
}
