import { Component, Inject, EventEmitter ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/snackbar.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { HotelService } from 'src/app/services/hotel.service';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  onAddHotel = new EventEmitter();
  onEditHotel = new EventEmitter();
  hotelForm:any = FormGroup;
  dialogAction:any = "Add";
  action:any = "Add";

responseMessage:any;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any,
  private formBulider:FormBuilder,
  protected hotelService:HotelService,
  public dialogRef: MatDialogRef<HotelComponent>,
  private snackbarService:SnackbarService
  ) { }

  ngOnInit(): void {
    this.hotelForm = this.formBulider.group({
      name:[null,[Validators.required]]
    });
    if(this.dialogData.action === 'Edit'){
      this.dialogAction = "Edit";
      this.action = "Update";
      this.hotelForm.patchValue(this.dialogData.data);
    }
  }

  handleSubmit(){
    if(this.dialogAction === "Edit"){
      this.edit();
    }else{
      this.add();
    }
  }
  add() {
    var formData = this.hotelForm.value;
    var data = {
      name: formData.name
    }
    this.hotelService.add(data).subscribe((response:any)=>{
      this.dialogRef.close();
      this.onAddHotel.emit();
      this.responseMessage = response.message;
      // alert("Successfully Add Hotel");
      this.snackbarService.openSnackBar(this.responseMessage , "success");
    },(error)=>{
      this.dialogRef.close();
      console.error(error);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      // alert(this.responseMessage +" " +GlobalConstants.error);
      this.snackbarService.openSnackBar(this.responseMessage , GlobalConstants.error);
    });
  }
  edit() {
    var formData = this.hotelForm.value;
    var data = {
      id: this.dialogData.data.id,
      name: formData.name
    }
    this.hotelService.update(data).subscribe((response:any)=>{
      this.dialogRef.close();
      this.onEditHotel.emit();
      this.responseMessage = response.message;
      // alert("Successfully Update Hotel");
      this.snackbarService.openSnackBar(this.responseMessage , "success");
    },(error)=>{
      this.dialogRef.close();
      console.error(error);
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      // alert(this.responseMessage +" " +GlobalConstants.error);
      this.snackbarService.openSnackBar(this.responseMessage , GlobalConstants.error);
    });  
  }
}