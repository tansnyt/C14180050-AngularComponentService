import { Injectable } from "@angular/core";
import { NoteService } from "./note.service";

@Injectable()
export class GlobalVarService {
  private notedata: Array<NoteService> = [];
  constructor() {}

  public addNote(judul: string, isi: string, tanggal: Date) {
    let noteObj = new NoteService(judul, isi, tanggal);
    this.notedata.push(noteObj);
  }

  public getNotes(){
    return this.notedata;
  }
}
