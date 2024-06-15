import { EventHandler } from "./types"
import { FloorInterface } from "./interfaces";

export default class Floor implements FloorInterface {
    number: number;
    button: HTMLButtonElement;
    element: HTMLElement;

    constructor(number: number, callElevator: EventHandler) {
        this.number = number;
   
        this.button = document.createElement('button')
        this.button.classList.add('floor-button')
        this.button.innerText = `${this.number}`
        this.button.addEventListener('click', callElevator)

        this.element = document.createElement('div');
        this.element.classList.add('floor');
        this.element.append(this.button)
        this.element.addEventListener('click', callElevator)
    }
}