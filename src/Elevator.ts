import ElevatorButton from "./ElevatorButton"
import { ElevatorInterface } from "./interfaces";

export default class Elevator implements ElevatorInterface {
    id: number;
    floor = 0;
    speed = 1000;
    isMoving = false;
    element: HTMLElement;
    buttons: ElevatorButton[] = [];

    constructor(id: number, floors: number) {
        this.id = id;
 
        this.element = document.createElement('div')
        this.element.classList.add('elevator')
        this.element.style.left = this.id * 20 + 25 + '%'

        const buttonWrapper = document.createElement('div')
        for (let i = 0; i <= floors; i++) {
            const clickHandler = (event: Event) => {
                event.preventDefault()
                this.goToFloor(i)
            }
            const button = new ElevatorButton(i, clickHandler)
            buttonWrapper.prepend(button.element)
            this.buttons.push(button)
        }
        this.element.append(buttonWrapper)
        this.updateButtons()
    }
    
    public goToFloor(n: number): void {
        const distance = Math.abs(n - this.floor)
        const time = this.speed * distance
        const direction = n - this.floor > 0 ? 1 : -1;

        this.element.style.transform = `translateY(-${100*n}%)`
        this.element.style.transitionDuration = `${time}ms`
        this.isMoving = true

        this.updateFloor(distance, direction)
    }

    private updateFloor(distance: number, direction: number) {

        if (distance == 0) {
            this.isMoving = false
            return
        }

        distance--

        setTimeout(() => {
            this.floor = this.floor + direction
            this.updateButtons()
            this.updateFloor(distance, direction) 

        }, this.speed)
    }

    private updateButtons() {
        this.buttons.forEach(btn => {
            btn.element.style.opacity = '0.5'
        })
        this.buttons[this.floor].element.style.opacity = '1'
    }

}