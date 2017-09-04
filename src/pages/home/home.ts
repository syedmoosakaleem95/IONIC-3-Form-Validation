import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  formgroup:FormGroup;
  firstname:AbstractControl;
  lastname:AbstractControl;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public formbuilder:FormBuilder) {

      this.formgroup = formbuilder.group({
        firstname:['',Validators.required,Validators.minLength(5)],
        lastname:['',Validators.required,Validators.maxLength(15)]
      });

      this.firstname = this.formgroup.controls['firstname'];
      this.lastname = this.formgroup.controls['lastname'];

  }
  









  // showactionsheet() {
  //   let actionsheet = this.actionctrl.create( {
  //     title: 'My favorite list',
  //     buttons : [
  //       {
  //         text:'Delete',
  //         role:'destructive',
  //         handler: () => {
  //           console.log("Hey deleted successfully")
  //         }
  //       },
  //       {
  //         text:'Share',
  //         handler: () => {
  //           console.log("Hey Shared successfully")
  //         }
  //       },
  //       {
  //         text:'Cancel',
  //         role:'cancel',
  //         handler: () => {
  //           console.log("Hey cancelled successfully")
  //         }
  //       }
  //     ]
  //   });

  //   actionsheet.present();
  // }

}
