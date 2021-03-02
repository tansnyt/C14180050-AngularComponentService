import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalVarService } from "../global-var.service";
import { NoteService } from "../note.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  constructor(private router: Router, private varglobal: GlobalVarService) {}

  judul = "";
  isi = "";
  tanggal: Date;
  notes: Array<NoteService>;

  ngOnInit() {
    let temp = this.varglobal.getNotes();
    this.notes = temp;
  }

  inputNote() {
    this.varglobal.addNote(this.judul, this.isi, this.tanggal);
    this.judul = "";
    this.isi = "";
    alert("note added!!");
  }

  detailNote() {
    if (this.judul != "") this.router.navigate(["/detail/" + this.judul]);
    else alert("isi judul!");
  }
}
