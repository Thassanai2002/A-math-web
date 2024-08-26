import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { TableModule } from 'primeng/table';
import { TileComponent } from './tile/tile.component';
import { RoomComponent } from './room/room.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, SignUpComponent, GameBoardComponent, TileComponent, RoomComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FloatLabelModule,
    DropdownModule,
    ConfirmDialogModule,
    DialogModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
