import { EventHandler } from './types'
import { ElevatorButtonInterface } from './interfaces'

export default class ElevatorButton implements ElevatorButtonInterface {
    number: number;
    element: HTMLButtonElement;

    constructor(index: number, clickHandler: EventHandler) {
        this.number = index
        this.element = document.createElement('button')
        this.element.classList.add('elevator-button')
        this.element.addEventListener('click', clickHandler )
        this.element.innerText = `${this.number}`
    }
}