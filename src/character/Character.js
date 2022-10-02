import { DiceBag } from '../dice/DiceBag';
import { Die } from '../dice/Die';
import Gear from './Gear.json';
import Traits from './Traits.json';

export class Character {
    constructor() {
        //fixed stats
        this.level = 1;
        this.moveSpeed = 40;
        this.explorationSpeed = 120;

        //randomized stats
        this.age = this.#rollAge();
        this.alignment = this.#rollAlignment();
        this.copperPennies = this.#rollCopperPennies();
        this.hitPoints = this.#rollHitPoints();

        //core stats and items
        this.attributes = this.#rollAttributes();
        this.inventory = this.#rollInventory();
        this.traits = this.#rollTraits();

        //derived stats
        this.maxHenchmen = this.attributes.cha.bonus;
        this.maxslots = this.attributes.con.defense;
    }

    #rollAge() {
        const ageDie = new Die(20);
        return ageDie.roll() + 17;
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

    #rollCopperPennies() {
        const diceBag = new DiceBag([new Die(6), new Die(6), new Die(6)]);
        return diceBag.rollSum() * 20;
    }

    #rollHitPoints() {
        const hitDie = new Die(8);
        return hitDie.roll();
    }

    #rollInventory() {
        const d4 = new Die(4);
        const d16 = new Die(16);
        const d20 = new Die(20);

        const weapon = Gear.weapons[d16.roll() - 1];
        const armor = Gear.armor[d4.roll() - 1];
        const item1 = Gear.dungeoneeringGear[d20.roll() - 1];
        const item2 = Gear.dungeoneeringGear[d20.roll() - 1];
        const item3 = Gear.generalGear1[d20.roll() - 1];
        const item4 = Gear.generalGear2[d20.roll() - 1];

        return {
            weapon: weapon,
            armor: armor,
            item1: item1,
            item2: item2,
            item3: item3,
            item4: item4,
        };
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
}
