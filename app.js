'use strict';
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let math;
let seeatle={
name:'seattle',
minCust:23,
maxCust:65,
avGc:6.3,
randCus:[],
cPh:[],
tot:0,

rand:function(minCust,maxCust){

  this.minCust = Math.ceil(this.minCust);
  this.maxCustmax = Math.floor(this.maxCust);
  for(let i=0;i<hours.length;i++){
  math= ( Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  this.randCus.push(math);

  

}

},

puRchas:function(){
    for(let i=0;i<hours.length;i++){

     this.cPh[i]=this.randCus[i]*this.avGc
     this.tot+=this.cPh[i];

    }

console.log(this.cPh);

},
render:function(){
let coNta=document.getElementById('div');

let h2El=document.createElement('h2');
h2El.textContent=this.name;
coNta.appendChild(h2El);
let ulEl=document.createElement('ul');


for(let i=0;i<hours.length;i++){

    let liEl=document.createElement('li');
    liEl.textContent=`${hours[i]}:${this.cPh[i]}`;
    ulEl.appendChild(liEl);

 
}
let totEl=document.createElement('li');
totEl.textContent=`Total:${this.tot}`;
ulEl.appendChild(totEl);
coNta.appendChild(ulEl);






}






}
seeatle.rand(13,65,3.2);
seeatle.puRchas();
seeatle.render();

