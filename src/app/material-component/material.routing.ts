import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouteGuardService } from '../services/route-guard.service';
import { ManageHotelComponent } from './manage-hotel/manage-hotel.component';
import { ManageRoomComponent } from './manage-room/manage-room.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { MangaeUserComponent } from './mangae-user/mangae-user.component';
import { MangaeReservationComponent } from './mangae-reservation/mangae-reservation.component';


export const MaterialRoutes: Routes = [
    
    {
        path:'hotel',
        component:ManageHotelComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole: ['admin' , 'user']
        }
    },

    {
        path:'room',
        component:ManageRoomComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole: ['admin','user']
        }
    },


    {
        path:'reservation',
        component: MangaeReservationComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole: ['admin' , 'user']
        }
    },

    {
        path:'bill',
        component:ViewBillComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole: ['admin' , 'user']
        }
    },

    {
        path:'user',
        component:MangaeUserComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole: ['admin','user']
        }
    },
];
