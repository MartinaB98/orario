import { Component } from '@angular/core';
// ionic cordova plugin add cordova-plugin-advanced-http
//npm install @ionic-native/http
import {HTTP} from '@ionic-native/http/ngx';
import {HttpClient} from '@angular/common/http';
//npm install --save @ionic/storage
import {Storage} from '@ionic/Storage';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


constructor(
  public http: HTTP,
  public httpClient: HttpClient,
  public globalData: GlobalDataService,
  public storage: Storage
) { }



export class HomePage {

}

// getJSONNative(url: string, body: any) {
//   this.http.setHeader('*', 'Content-Type', 'application/json');
//   this.http.setDataSerializer('json');
//   return new Promise((resolve, reject) => {
//       this.http.post(url, body, {}).then(
//           (response) => {
//               const dati = JSON.parse(response.data);
//               GlobalDataService.log(0, url, response);
//               resolve(dati);
//           },
//           (err) => {
//               GlobalDataService.log(2, 'Error', err);
//               reject(err);
//           }).catch(exception => {
//           GlobalDataService.log(2, 'Catch', exception);
//           reject();
//       });
//   });
// }


getJSONAngular(url: string, body: any) {
  return new Promise((resolve, reject) => {
    this.httpClient.post(url,body)
    .subscribe(
       (response) => {
        GlobalDataService.log( 0,url, response);
        resolve(reponse);
      },
       (err) => {
        GlobalDataService.log( 2, 'Error', err);
        reject(err);
      });
  });
}










