import { Injectable } from "@angular/core";

@Injectable()
export class NoteService {
  judul: string;
  isi: string;
  tanggal: Date;
  fav = false;
  constructor(judul: string, isi: string, tanggal: Date) {
    this.judul = judul;
    this.isi = isi;
    this.tanggal = tanggal;
  }

  public setFav(val : boolean) {
    this.fav = val;
  }

  public getJudul() {
    return this.judul;
  }

  public getIsi() {
    return this.isi;
  }

  public getTanggal() {
    return this.tanggal;
  }

  public getFav() {
    return this.fav;
  }
}
