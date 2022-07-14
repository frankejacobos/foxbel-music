import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { RecientesComponent } from './sections/recientes/recientes.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReproductorFooterComponent } from './components/reproductor-footer/reprodutor-footer.component';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSliderModule } from 'ng-zorro-antd/slider';

@NgModule({
  declarations: [
    ContentComponent,
    RecientesComponent,
    SidebarComponent,
    ReproductorFooterComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule,
    NzMenuModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzSliderModule
  ]
})
export class ContentModule { }
