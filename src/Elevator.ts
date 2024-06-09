import ElevatorButton from "./ElevatorButton"
import { ElevatorInterface } from "./interfaces";

export default class Elevator implements ElevatorInterface {
    id: number;
    floor = 0;
    speed = 1000;
    isMoving = false;
    element: HTMLElement;
    buttons: HTMLElement;

    constructor(id: number, floors: number) {
        this.id = id;
 
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
        const direction = n - this.floor > 0 ? 1 : -1;

        this.closeDoors()
        this.element.style.transform = `translateY(-${100*n}%)`
        this.element.style.transitionDuration = `${time}ms`
        this.isMoving = true

        this.updateFloor(distance, direction)
    }

    private updateFloor(distance: number, direction: number) {

        if (distance == 0) {
            this.openDoors()
            this.isMoving = false
            return
        }

        distance--

        setTimeout(() => {
            this.floor = this.floor + direction
            console.log(this.floor)
            this.updateFloor(distance, direction) 

        }, this.speed)
    }

    private closeDoors() {
        this.buttons.style.opacity = '0'
    }

    private openDoors() {
        this.buttons.style.opacity = '1' 
    }

}