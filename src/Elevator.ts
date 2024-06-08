import ElevatorButton from "./ElevatorButton"
import { ElevatorInterface } from "./interfaces";

export default class Elevator implements ElevatorInterface {
    id: number;
    floor: number;
    speed: number;
    doorsOpen: boolean;
    element: HTMLElement;
    buttons: HTMLElement;

    constructor(id: number, floors: number) {
        this.id = id;
        this.floor = 0
        this.speed = 500
        this.doorsOpen = false

        this.element = document.createElement('div')
        this.element.classList.add('elevator')
        this.element.style.left = this.id * 20 + 25 + '%'

        this.buttons = document.createElement('div')
        for (let i = 0; i <= floors; i++) {
            const clickHandler = (event: Event) => {
                event.preventDefault()
                this.goToFloor(i)
            }
            const button = new ElevatorButton(i, clickHandler)
            this.buttons.prepend(button.element)
        }
        this.element.append(this.buttons)
    }
    
    public goToFloor(n: number): void {
        const distance = Math.abs(n - this.floor)
        const time = this.speed * distance

        this.closeDoors()
        this.element.style.transform = `translateY(-${100*n}%)`
        this.element.style.transitionDuration = `${time}ms`

        this.floor = n
        setTimeout(() => {this.openDoors()}, time)
    }

    private closeDoors() {
        this.doorsOpen = false
        this.buttons.style.opacity = '0'
    }

    private openDoors() {
        this.doorsOpen = false
        this.buttons.style.opacity = '1' 
    }

}