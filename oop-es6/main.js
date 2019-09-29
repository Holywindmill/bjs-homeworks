class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.initialDurability = durability;
    }

    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability <= 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability >= this.initialDurability * 0.3 || this.durability === Infinity) {
            return this.attack;
        } else if (this.durability === 0) {
            return 0;
        } else {
            return this.attack / 2;
        }

    }

    isBroken() {
        return this.durability <= 0;
    }
}

class Arm extends Weapon {
    constructor() {
        super('Рука', 1, Infinity, 1)
    }
}

class Bow extends Weapon {
    constructor() {
        super('Лук', 10, 200, 3)
    }
}

class Sword extends Weapon {
    constructor() {
        super('Меч', 25, 500, 1)
    }
}

class Knife extends Weapon {
    constructor() {
        super('Нож', 5, 300, 1)
    }
}
class Staff extends Weapon {
    constructor() {
        super('Посох', 8, 300, 2)
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class TempestStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох бури';
        this.attack = 10;
        this.range = 3;
    }
}
