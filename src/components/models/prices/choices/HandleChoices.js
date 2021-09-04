import {StorePriceSite} from "../store/sites/StorePriceSite";
import {StorePriceBots} from "../store/StorePriceBots";
import {StorePriceApp} from "../store/StorePriceApp";
import {StorePriceDesign} from "../store/StorePriceDesign";
import Paginate from "../../../helpers/scroll/Paginate";

export class HandleChoices {
    constructor(statePaginate, stateOverallPrice, stateChosenPrices) {
        this.paginate = new Paginate(3, statePaginate);
        this.prices = [
            StorePriceSite,
            StorePriceBots,
            StorePriceApp,
        ]
        this.overallPrice = stateOverallPrice[0];
        this.setOverallPrice = stateOverallPrice[1];
        this.chosenPrices = stateChosenPrices[0];
        this.setChosenPrices = stateChosenPrices[1];
    }

    getPrice(index) {
        return this.prices[index]
    }

    addToChosenPrices(element) {
        this.setChosenPrices(old => [...old, element]);
    }

    removeToChosenPrices(element) {
        const chosenPrices = this.chosenPrices.filter((el) => el.id !== element.id);
        this.setChosenPrices(chosenPrices);
    }

    addPrice(price) {
        const nowPrice = this.overallPrice + price;
        this.setOverallPrice(nowPrice);
        console.log(this.chosenPrices);
    }

    removePrice(price) {
        const nowPrice = this.overallPrice - price;
        this.setOverallPrice(nowPrice);
        console.log(this.chosenPrices);
    }

    initiateChoice(id) {
        return this.chosenPrices.some(e => e.id === id);
    }

    providePricesList() {
        return this.getPrice(this.paginate.currentPage);
    }

    providePriceListLength() {
        return this.getPrice(this.paginate.currentPage).length;
    }

    removeChoice(element) {
        this.removePrice(element.price);
        this.removeToChosenPrices(element);
    }

    addChoice(element) {
        this.addPrice(element.price);
        this.addToChosenPrices(element);
    }

    findChoice(id) {
        const priceList = this.getPrice(parseInt(id / 100));
        return priceList.filter(element => element.id === id)[0];
    }

    activationAndDeactivationOfCheck(isChosen, checkBox) {
        if (isChosen) {
            checkBox.backgroundColor = "#5454D4";
            checkBox.borderColor = "white";
        } else {
            checkBox.borderColor = "#979797";
        }
    }

    decideAddOrRemove(id, isChoice) {
        const element = this.findChoice(id);
        if (isChoice) {
            console.log(element.price);
            this.addChoice(element)
        } else {
            this.removeChoice(element)
        }
    }

}