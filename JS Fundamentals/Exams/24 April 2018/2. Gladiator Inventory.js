function gladiatorInventory(input) {
    let inventory = input.shift().split(" ");
    let command = inventory[0];

    while (command !== "Fight!") {
        for (let string of input) {
            let [command, name] = string.split(' ');

            switch (command) {
                case "Buy":
                    if (!inventory.includes(name)) {
                        inventory.push(name);
                    }
                    break;
                case "Trash":
                    let index = inventory.indexOf(name);
                    if (index > -1) {
                        inventory.splice(index, 1);
                    }
                    break;
                case "Repair":
                    let index1 = inventory.indexOf(name);
                    if (index1 > -1) {
                        inventory.splice(index1, 1);
                        inventory.push(name);
                    }
                    break;
                case "Upgrade":
                    let[equipment, upgrade] = name.split("-");
                    let index2 = inventory.indexOf(equipment);
                    if(index2 > -1){
                        inventory.splice(index2 + 1, 0, equipment + ":" + upgrade);
                    }
                    break;
                case "Fight!":
                    console.log(inventory.join(" "));
                    return
            }
        }
    }
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel', 'Fight!'])
//gladiatorInventory(['SWORD Shield Spear',
//    'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V', 'Fight!'])