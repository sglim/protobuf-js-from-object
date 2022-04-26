const { serializeFromObject } = require("../");
const pb = require("./proto/burger_pb");

const burger = new pb.Burger();
burger.setName("big-mac");
burger.setHasLettuce(true);
burger.setCalories(540);
burger.addIngredients("cheese");
burger.addIngredients("pickle");
burger.addIngredients("onion");
const sideMenu = new pb.SideMenu();
sideMenu.setType(pb.SideMenu.Type.FRENCH_FRIES);
burger.setSideMenu(sideMenu);
const burgerObj = burger.toObject(false);

// Serialize
const buffer = serializeFromObject(burgerObj, pb.Burger);
// Deserialize
const burger2 = pb.Burger.deserializeBinary(buffer);
const burgerObj2 = burger2.toObject(false);

console.log("Before:", burgerObj);
console.log("After:", burgerObj2);
