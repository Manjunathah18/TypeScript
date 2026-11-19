let subs:number | string='1.M'

let apiRequestStatus:'pending'| 'sucess' | 'erroe'='pending'

let airlineSeat: 'aisle' | 'window' | 'middle'='aisle'

const orders=['12','20','35','48']

let currentOrder:string | undefined;

for(let order of orders){
    if(order=== '35'){
        currentOrder=order
        break;
    }
    currentOrder="42";
}

console.log(currentOrder)