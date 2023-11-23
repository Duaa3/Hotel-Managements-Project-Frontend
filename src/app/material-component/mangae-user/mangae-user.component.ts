import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

import { MatTableDataSource } from '@angular/material/table';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { SnakbarService } from 'src/app/services/snakbar.service';

@Component({
  selector: 'app-mangae-user',
  templateUrl: './mangae-user.component.html',
  styleUrls: ['./mangae-user.component.scss']
})
export class MangaeUserComponent implements OnInit {
  displayedColumns: string[] = ['name' , 'email' , 'contactNumber' , 'status'];
  dataSource:any;
  responseMessage:any;

  constructor(private userService:UserService,
    private dialog:MatDialog,
    private SnackbarService:SnakbarService,
    private router:Router) { }

  ngOnInit(): void {
    this.tableData();
  }
  tableData() {
    this.userService.getUsers().subscribe((response:any)=>{
      this.dataSource = new MatTableDataSource(response);
    },(error:any)=>{
      console.log(error.error?.message);
      if(error.error?.message){
        this.responseMessage = error.error?.message; 
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.SnackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onChange(status:any , id:any){
    var data = {
      status:status.toString(),
      id:id
    }
    this.userService.update(data).subscribe((response:any)=>{
      this.responseMessage = response?.message;
      this.SnackbarService.openSnackBar(this.responseMessage , "success");
    },(error:any)=>{
      //console.log(error.error?.message);
      if(error.error?.message){
        this.responseMessage = error.error?.message; 
      }else{
        //alert("status is updated successfully");

        this.responseMessage = GlobalConstants.genericError;
      }
      this.SnackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }


}