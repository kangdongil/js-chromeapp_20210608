const player = {
    name: "nico",
    sayHello: function(otherPersonsName) {
        console.log("hello! " + otherPersonsName + " Nice to Meet you! :)")
    },
};

console.log(player.name)
player.sayHello("lynn");
player.sayHello("nico");