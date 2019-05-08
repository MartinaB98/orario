import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

}
const Obj={
  "user1":[
    {   
  name:'ange',
  age: 3,
  food: 'pesce'
    }
],

"user2":[
  {   
    name:'pp',
    age: 5,
    food: 'banana'
      }
]
  
};

//tutto il json
const ObjString = JSON.stringify(Obj);


//ottiene solo il primo oggetto 'user1' presente nel json
// const ObjString = JSON.stringify(Obj.user1);

console.log(ObjString);

console.log(JSON.parse(ObjString));