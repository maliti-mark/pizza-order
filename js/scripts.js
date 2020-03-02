//user interface
var totalCosts = [];

function order(size, crust, vegTopping, nonVegTopping) {
    this.size = size;
    this.crust = crust;
    this.nonVegTopping = nonVegTopping;
    this.vegTopping = vegTopping;
    this.price = 0;

}
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaNonVegTopping = ["Chicken", "Sausage", "Bacon", ];
var pizzaVegTopping = ["Mushrooms", "Onions", "Capsicum", ];

order.prototype.cost = function() {
    if (this.size === pizzaSize[0]) {
        this.price += 200;
    } else if (this.size === pizzaSize[1]) {
        this.price += 400;
    } else if (this.size === pizzaSize[2]) {
        this.price += 700;
    }

    if (this.crust === pizzaCrust[0]) {
        this.price += 100;
    } else if (this.crust === pizzaCrust[1]) {
        this.price += 100;
    } else if (this.crust === pizzaCrust[2]) {
        this.price += 50;
    }

    if (this.nonVegTopping === pizzaNonVegTopping[0]) {
        this.price += 150;
    } else if (this.nonVegTopping === pizzaNonVegTopping[1]) {
        this.price += 150;
    } else if (this.nonVegTopping === pizzaNonVegTopping[2]) {
        this.price += 150;
    }


    if (this.vegTopping === pizzaVegTopping[0]) {
        this.price += 50;
    } else if (this.vegTopping === pizzaVegTopping[1]) {
        this.price += 50;
    } else if (this.vegTopping === pizzaVegTopping[2]) {
        this.price += 50;
    }

    return this.price;
}


order.prototype.totalCost = function() {
    var orderTotal = 0;
    for (var order = 0; order < totalCosts.length; order++) {
        orderTotal += totalCosts[order];
    }
    return orderTotal;
}

//inner interface
$(document).ready(function() {
    $("input#order").click(function(event) {
        event.preventDefault();
        var sizes = $("select#size").val();
        var crusts = $("select#crust").val();
        var noVegToppings = $("select#novegetable").val();
        var vegToppings = $("select#vegetable").val();

        var newPizzaOrder = new order(sizes, crusts, noVegToppings, vegToppings);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);


        $("#sz").text(sizes);
        $("#cr").text(crusts);
        $("#nvgs").text(noVegToppings);
        $("#vgs").text(vegToppings);
        $("#tc").text(newPizzaOrder.totalCost());


    });

    $("#deliver").click(function() {
        prompt("Please insert you name")
        prompt("Please insert you location")
        prompt("Please insert your addrress")
        alert("You will be charged an extra 200 for delivery")
        alert("Thank you for Your Purchase!Your order will be delivered to your location")

    });

    $(".work1").hover(function() {
        $(".p1").slideToggle(1000);
        $("#img1").slideToggle(1000);
        $(".p1").show();
    });


    $(".work2").hover(function() {
        $(".p2").slideToggle(1000);
        $("#img2").slideToggle(1000);
        $(".p2").show();
    });


    $(".work3").hover(function() {
        $(".parag").slideToggle(1000);
        $("#img3").slideToggle(1000);
        $(".parag").show();
    });


    $(".work4").hover(function() {
        $(".p4").slideToggle(1000);
        $("#img").slideToggle(1000);
        $(".p4").show();
    });


    $(".work5").hover(function() {
        $(".p5").slideToggle(1000);
        $("#img5").slideToggle(1000);
        $(".p5").show();
    });


    $(".work6").hover(function() {
        $(".p6").slideToggle(1000);
        $("#img6").slideToggle(1000);
        $(".p6").show();
    });


    $(".work7").hover(function() {
        $(".p7").slideToggle(1000);
        $("#img7").slideToggle(1000);
        $(".p7").show();
    });


    $(".work8").hover(function() {
        $(".p8").slideToggle(1000);
        $("#img8").slideToggle(1000);
        $(".p8").show();
    });

})

