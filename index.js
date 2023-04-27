function vendinngMachine(numberOfProduct){
    switch (numberOfProduct) {
        case 1:
            console.log("Pepsi");
            return 2;
        case 2:
            console.log("Cocacola");
            return 3;
        case 3:
            console.log("Nutri boost");
            return 3;
        case 4:
            console.log("Không độ(MTP)");
            return 5;
        case 5:
            console.log("DR.Thanh");
            return 1;  
        case 6:
            console.log("Revine");
            return 4;   
        default:
            return;
    }
}
let total = +prompt("Please enter money: ");
if(isNaN(total)){
    console.log("Nhập sai");
}else if(!isNaN(total) && total > 0 && parseInt(total)===total){
    while(total>0){
        let num = +prompt("Please number of product: ");
        console.log("You choosen: ")
        let enter = vendinngMachine(num);
        total -= enter;
        if (total < enter) {
            console.log("You not enough money to buy");
            vendinngMachine(num);
            break;
        }else{
            console.log("You are bought ");
            vendinngMachine(num);
        }
    }
}