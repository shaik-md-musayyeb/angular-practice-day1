var Menu = /** @class */ (function () {
    function Menu(itemList, totalPages) {
        this.item = itemList;
        this.pages = totalPages;
    }
    Menu.prototype.list = function () {
        console.log("Our menu:");
        for (var i = 0; i < this.item.length; i++) {
            console.log(this.item[i]);
        }
    };
    return Menu;
}());
// creating object for Menu
var menu = new Menu(["cakes", "juices", "milkshake", "hotchocolate"], 1);
menu.list;
