import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

/**
 * Generated class for the ContohPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contoh',
  templateUrl: 'contoh.html',
})
export class ContohPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, private datePicker: DatePicker) {
  }//ini nak create object

  showDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Perak Technology!',
      subTitle: 'Selamat datang ke Perak Technology!',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContohPage');
  }

}
