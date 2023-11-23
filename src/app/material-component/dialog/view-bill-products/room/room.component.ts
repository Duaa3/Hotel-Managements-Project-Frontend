
import { RoomService } from 'src/app/services/room.service';
import { Component, Inject, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GlobalConstants } from 'src/app/shared/global-constants';
import { SnackbarService } from 'src/app/snackbar.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  onAddRoom = new EventEmitter();
  onEditRoom = new EventEmitter();
  roomForm: any = FormGroup;
  dialogAction: any = "Add";
  action: any = "Add";
  responseMessage: any;
  hotel: any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formBulider: FormBuilder,
    protected roomService: RoomService,
    public dialogRef: MatDialogRef<RoomComponent>,
    private snackbarService: SnackbarService,
    private hotelService: HotelService
  ) { }

  ngOnInit(): void {
    this.roomForm = this.formBulider.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      hotelId: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required]
    });
    if (this.dialogData.action === 'Edit') {
      this.dialogAction = "Edit";
      this.action = "Update";
      this.roomForm.patchValue(this.dialogData.data);
    }
    this.gethotel();
  }

  gethotel() {
    this.hotelService.getHotel().subscribe((response: any) => {
      this.hotel = response;
    }, (error) => {
      console.error(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    });
  }

  handleSubmit() {
    if (this.dialogAction === "Edit") {
      this.edit();
    } else {
      this.add();
    }
  }
  add() {
    var formData = this.roomForm.value;
    var data = {
      name: formData.name,
      hotelId: formData.hotelId,
      price: formData.price,
      description: formData.description
    }

    this.roomService.add(data).subscribe((response: any) => {
      this.dialogRef.close();
      this.onAddRoom.emit();
      this.responseMessage = response.message;
      // alert("Successfully Add Room");
      this.snackbarService.openSnackBar(this.responseMessage, "success");
    }, (error) => {
      this.dialogRef.close();
      console.error(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      // alert(this.responseMessage + " " + GlobalConstants.error);
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    });
  }
  edit() {
    var formData = this.roomForm.value;
    var data = {
      id: this.dialogData.data.id,
      name: formData.name,
      hotelId : formData.hotelId,
      price: formData.price,
      description:formData.description
    }
    this.roomService.update(data).subscribe((response: any) => {
      this.dialogRef.close();
      this.onEditRoom.emit();
      this.responseMessage = response.message;
      // alert("Successfully Update Room");
      this.snackbarService.openSnackBar(this.responseMessage, "success");
    }, (error) => {
      this.dialogRef.close();
      console.error(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      // alert(this.responseMessage + " " + GlobalConstants.error);
      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    });
  }
}