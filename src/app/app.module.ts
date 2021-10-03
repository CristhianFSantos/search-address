import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CardComponent } from './components/card/card.component';
import { GridResultComponent } from './components/grid-result/grid-result.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { ToolbarHeaderComponent } from './components/toolbar-header/toolbar-header.component';
import { CheckZipCodeComponent } from './components/check-zip-code/check-zip-code.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GridResultComponent,
    SearchContainerComponent,
    ToolbarHeaderComponent,
    CheckZipCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatDividerModule,
    FormsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
