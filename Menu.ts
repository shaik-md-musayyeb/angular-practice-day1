class Menu{
    item : Array<string>;
    pages:number;

    constructor(itemList:Array<string>, totalPages:number){
        this.item = itemList;
        this.pages = totalPages;
    }

    list(): void {
        console.log("Our menu:")
        for(var i=0; i< this.item.length; i++){
            console.log(this.item[i]);
        }


    }
}

// creating object for Menu

var menu = new Menu(
    ["cakes","juices","milkshake","hotchocolate"],1
);

menu.list;

