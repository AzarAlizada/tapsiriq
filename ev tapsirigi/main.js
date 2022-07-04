let BMW = {
    marka : "BMW",
    model : "x5",
    speed : 230,
    isAvto : true
}

let mercedes = {
    marka : "mercedes",
    model : "c260",
    speed : 220,
    isAvto : false
}

function allCars(color1,color2){
    document.getElementById(`marka : ${this.marka} - model : ${this.model} - speed : ${this.speed} - isAvto ${this.isAvto} - color : ${color1} , ${color2} `).value0;
}

allCars.call(BMW,'black');
allCars.call(mercedes, 'darkblue');