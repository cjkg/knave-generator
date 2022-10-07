import DiceBag from '../dice/DiceBag';
import Die from '../dice/Die';
import Gear from './Gear.json';
import Names from './Names.json';
import Traits from './Traits.json';

class Character {
    constructor() {
        //fixed stats
        this.level = 1;
        this.moveSpeed = 40;
        this.explorationSpeed = 120;

        //randomized stats
        this.age = this.#rollAge();
        this.alignment = this.#rollAlignment();
        this.hitPoints = this.#rollHitPoints();
        this.name = this.#rollName();

        //core stats and items
        this.attributes = this.#rollAttributes();
        this.inventory = this.#rollInventory();
        this.traits = this.#rollTraits();
        this.usedSlots = Object.values(this.inventory).reduce((sum, curr) => sum + curr.slot, 0); //This doesn't work for some reason

        //derived stats
        this.damage = this.inventory.weapon.damage;
        this.armorDefense = this.inventory.armor.defense + this.inventory.helmet.defense + this.inventory.shield.defense;
        this.maxHenchmen = this.attributes.cha.bonus;  
        this.maxSlots = this.attributes.con.defense;
    }

    #rollAge() {
        const ageDiceBag = new DiceBag([new Die(6), new Die(6), new Die(6)]);
        return ageDiceBag.rollSum() + 15;
    }

    #rollAlignment() {
        let alignment = 'Neutral';
        const roll = new Die(20).roll();
        
        if (roll <= 5) {
            alignment = 'Law';
        } else if (roll >= 16) {
            alignment = 'Chaos';
        }

        return alignment;
    }

    #rollArmor() {
        const roll = new Die(20).roll();
        let armor = Gear.armor.unarmored;

        if (roll === 20) {
            armor = Gear.armor.chain; 
        } else if (roll >= 15) {
            armor = Gear.armor.brigandine;
        } else if (roll >= 4) {
            armor = Gear.armor.gambeson;
        }

        return armor;
    }

    #rollAttributes() {
        const attributeBag = new DiceBag([new Die(6), new Die(6), new Die(6)]);

        const conBonus = attributeBag.rollTakeLowest();
        const strBonus = attributeBag.rollTakeLowest();
        const dexBonus = attributeBag.rollTakeLowest();
        const wisBonus = attributeBag.rollTakeLowest();
        const intBonus = attributeBag.rollTakeLowest();
        const chaBonus = attributeBag.rollTakeLowest();

        return {
            con: { bonus: conBonus, defense: conBonus + 10 },
            str: { bonus: strBonus, defense: strBonus + 10 },
            dex: { bonus: dexBonus, defense: dexBonus + 10 },
            wis: { bonus: wisBonus, defense: wisBonus + 10 },
            int: { bonus: intBonus, defense: intBonus + 10 },
            cha: { bonus: chaBonus, defense: chaBonus + 10 },
        }
    }

    #rollHitPoints() {
        const hitDie = new Die(8);
        return hitDie.roll();
    }

    #rollInventory() {
        const d20 = new Die(20);

        const weapon = this.#rollWeapons();
        const armor = this.#rollArmor();
        const peripherals = this.#rollPeripherals();

        const item1 = {name: Gear.dungeoneeringGear[d20.roll() - 1], slot: 1};
        const item2 = {name: Gear.dungeoneeringGear[d20.roll() - 1], slot: 1};
        const item3 = {name: Gear.generalGear1[d20.roll() - 1], slot: 1};
        const item4 = {name: Gear.generalGear2[d20.roll() - 1], slot: 1};
        const ration = {name: "Ration (one day)", slot: 1};

        return {
            weapon: weapon,
            armor: armor,
            helmet: peripherals.helmet,
            shield: peripherals.shield,
            item1: item1,
            item2: item2,
            item3: item3,
            item4: item4,
            ration1: ration,
            ration2: ration,
        };
    }

    #rollName() {
        const dN = new Die(Names.firstName.length);
        const dM = new Die(Names.lastName.length);
        const firstName = Names.firstName[dN.roll() - 1];
        const lastName = Names.lastName[dM.roll() - 1];
        return `${firstName} ${lastName}`;
    }

    #rollPeripherals() {
        const roll = new Die(20).roll();
        let helmet = Gear.armor.bareheaded;
        let shield = Gear.armor.shieldless;

        if (roll >= 14 && roll <= 16) {
            helmet = Gear.armor.helmet; 
        } else if (roll >= 17 && roll <= 19) {
            shield = Gear.armor.shield;
        } else if (roll === 20) {
            helmet = Gear.armor.helmet;
            shield = Gear.armor.shield;
        }

        return {helmet: helmet, shield: shield}
    }

    #rollTraits() {
        const d20 = new Die(20);

        const physique = Traits.physique[d20.roll() - 1];
        const face = Traits.face[d20.roll() - 1];
        const skin = Traits.skin[d20.roll() - 1];
        const hair = Traits.hair[d20.roll() - 1];
        const clothing = Traits.clothing[d20.roll() - 1];
        const virtue = Traits.virtue[d20.roll() - 1];
        const vice = Traits.vice[d20.roll() - 1];
        const speech = Traits.speech[d20.roll() - 1];
        const background = Traits.background[d20.roll() - 1];
        const misfortune = Traits.misfortune[d20.roll() - 1];

        return {
            physique: physique,
            face: face,
            skin: skin,
            hair: hair,
            clothing: clothing,
            virtue: virtue,
            vice: vice,
            speech: speech,
            background: background,
            misfortune: misfortune,
        };
    }

    #rollWeapons() {
        const d16 = new Die(16);
        return Gear.weapons[d16.roll() - 1];
    }
}

export default Character;