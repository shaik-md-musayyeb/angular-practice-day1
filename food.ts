interface food{
    name:string;
    calories:number;
}

function display (Food:food):void{
    console.log("My "+Food.name+" has "+Food.calories+" calories ");

}

var pizza = {
    name:"pizza",
    calories:500
}

display(pizza);

