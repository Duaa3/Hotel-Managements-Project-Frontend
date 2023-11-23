import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { MaterialModule } from '../shared/material-module';
import { ViewBillProductsComponent } from './dialog/view-bill-products/view-bill-products.component';
import { ManageHotelComponent } from './manage-hotel/manage-hotel.component';
import { HotelComponent } from './dialog/view-bill-products/hotel/hotel.component';
import { RoomComponent } from './dialog/view-bill-products/room/room.component';
import { ConfirmationComponent } from './dialog/view-bill-products/confirmation/confirmation.component';
import { ChangePasswordComponent } from './dialog/view-bill-products/change-password/change-password.component';
import { ManageRoomComponent } from './manage-room/manage-room.component';
import { MangaeUserComponent } from './mangae-user/mangae-user.component';
import { MangaeReservationComponent } from './mangae-reservation/mangae-reservation.component';
import { ViewBillComponent } from './view-bill/view-bill.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  declarations: [
    ViewBillProductsComponent,
    ManageHotelComponent,
    HotelComponent,
    RoomComponent,
    ConfirmationComponent,
    ChangePasswordComponent,
    ManageRoomComponent,
    MangaeUserComponent,
    MangaeReservationComponent,
    ViewBillComponent,
   
  ]
})
export class MaterialComponentsModule {}
