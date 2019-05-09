// ionic cordova plugin add cordova-plugin-advanced-http
//npm install @ionic-native/http
import {HTTP} from '@ionic-native/http/ngx';
import {HttpClient} from '@angular/common/http';
//npm install --save @ionic/storage
import {Storage} from '@ionic/Storage';

export class impostaOrario{

    constructor(
        public http: HTTP,
        public httpClient: HttpClient,
        public storage: Storage
      ) { }
    
    
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
            //   GlobalDataService.log( 0,url, response);
              resolve(response);
            },
             (err) => {
            //   GlobalDataService.log( 2, 'Error', err);
              reject(err);
            });
        });
      }
}