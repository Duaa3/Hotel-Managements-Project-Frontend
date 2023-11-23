import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as saveAs from 'file-saver';
import { BillService } from 'src/app/services/bill.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { SnakbarService } from 'src/app/services/snakbar.service';
import { RoomService } from 'src/app/services/room.service';
@Component({
  selector: 'app-mangae-reservation',
  templateUrl: './mangae-reservation.component.html',
  styleUrls: ['./mangae-reservation.component.scss']
})
export class MangaeReservationComponent implements OnInit {

  displayedColumns: string[] = ['name', 'hotel', 'price', 'quantity', 'total', 'edit'];
  dataSource: any = [];
  manageOrderForm: any = FormGroup;
  hotel: any = [];
  room: any = [];
  price: any;
  totalAmount: number = 0;
  responseMessage: any;

  constructor(
    private formBulider: FormBuilder,
    private hotelService: HotelService,
    private roomService: RoomService,
    private billService: BillService,
    private dialog: MatDialog,
    private SnackbarService: SnakbarService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHotel();
    this.manageOrderForm = this.formBulider.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      contactNumber: [null, [Validators.required]],
      paymentMethod: [null, [Validators.required]],
      room: [null, [Validators.required]],
      hotel: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      price: [null, [Validators.required]],
      total: [0, [Validators.required]]
    });
  }

  getHotel() {
    this.hotelService.getFilteredHotel().subscribe((response: any) => {
      this.hotel = response;
    }, (error: any) => {
      console.log(error.error?.message);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.SnackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  getRoomByHotel(value: any) {
    this.roomService.getRoomByHotel(value.id).subscribe((response: any) => {
      this.room = response;
      this.manageOrderForm.controls['price'].setValue('');
      this.manageOrderForm.controls['quantity'].setValue('');
      this.manageOrderForm.controls['total'].setValue(0);
    },(error: any) => {
      console.log(error.error?.message);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.SnackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  getRoomDetails(value: any) {
    this.roomService.getById(value.id).subscribe((response: any) => {
      this.price = response.price;
      this.manageOrderForm.controls['price'].setValue(response.price);
      this.manageOrderForm.controls['quantity'].setValue('1');
      this.manageOrderForm.controls['total'].setValue(this.price * 1);
    }, (error: any) => {
      console.log(error.error?.message);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.SnackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  setQuantity(value: any) {
    var temp = this.manageOrderForm.controls['quantity'].value;
    if (temp > 0) {
      this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value * this.manageOrderForm.controls['price'].value);
    } else if (temp != '') {
      this.manageOrderForm.controls['quantity'].setValue('1');
      this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value * this.manageOrderForm.controls['price'].value);
    }
  }

  validateRoomAdd() {
    var fromData = this.manageOrderForm.value;

    //var totalValue = this.manageOrderForm.contols['total'].value;
    var Value = this.manageOrderForm.controls['price'].value;
    if ( Value === null || fromData?.room?.total === 0 || fromData?.room?.total === '' || fromData?.room?.quantity <= 0) {
      return true;
    } else {
      return false;
    }
  }


  validateSubmit() {
    var formData = this.manageOrderForm.value;
    if (this.totalAmount === 0 || formData.room.name === null || this.manageOrderForm.controls['email'].value === null ||
    formData.contactNumber === null || formData.paymentMethod === null) {
      return true;
    } else {
      return false;
    }
  }

  add(){
    var fromData = this.manageOrderForm.value;
    var roomName = this.dataSource.find((e:{id:number}) => e.id === fromData.room.id);
    if(roomName === undefined){
      this.totalAmount = this.totalAmount + fromData.total;
      this.dataSource.push({id:fromData.room.id , name:fromData.room.name , hotel:fromData.hotel.name, quantity:fromData.quantity, price:fromData.price,total:fromData.total});
      this.dataSource = [...this.dataSource];
      //alert("Order Added Successfully");
      this.SnackbarService.openSnackBar(GlobalConstants.roomAdded , "Success");
    }else{
      this.SnackbarService.openSnackBar(GlobalConstants.roomExistError , GlobalConstants.error);
    }
  }

  handleDeleteAction(value:any , element:any){
    this.totalAmount = this.totalAmount = element.total;
    this.dataSource.splice(value,1);
    this.dataSource = [...this.dataSource];
  }

  submitAction(){
    var formData = this.manageOrderForm.value;
    var data = {
      name : formData.name,
      email : formData.email,
      contactNumber : formData.contactNumber,
      paymentMethod : formData.paymentMethod,
      totalAmount : this.totalAmount.toString(),
      roomDetails : JSON.stringify(this.dataSource)
    }

    this.billService.generateReport(data).subscribe((resonse:any)=>{
      this.downloadFile(resonse?.uuid);
      this.manageOrderForm.reset();
      this.dataSource = [];
      this.totalAmount = 0;
      },(error: any) => {
        console.log(error.error?.message);
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.SnackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
      })
  }
  downloadFile(fileName:string) {
    var data = {
      uuid : fileName
    }
    this.billService.getPdf(data).subscribe((resonse:any)=>{
        saveAs(resonse , fileName +".pdf");
    })
  }
}