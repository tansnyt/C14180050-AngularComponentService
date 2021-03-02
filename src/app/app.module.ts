import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { InputComponent } from "./input/input.component";
import { GlobalVarService } from "./global-var.service";
import { NoteService } from "./note.service";
import { DetailComponent } from "./detail/detail.component";
import { FavoriteComponent } from "./favorite/favorite.component";

const ROUTES: Routes = [
  { path: "input", component: InputComponent },
  { path: "detail/:judul", component: DetailComponent },
  { path: "favorite", component: FavoriteComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [
    AppComponent,
    HelloComponent,
    InputComponent,
    DetailComponent,
    FavoriteComponent
  ],
  bootstrap: [AppComponent],
  providers: [GlobalVarService, NoteService]
})
export class AppModule {}
