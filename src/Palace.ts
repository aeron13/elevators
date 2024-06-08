import Floor from './Floor'
import Elevator from './Elevator'
import { PalaceInterface } from './interfaces';

export default class Palace implements PalaceInterface {
    height: number;
    floors: Floor[];
    elevators: Elevator[];
 
    constructor() {

        this.height = 4
    
        this.elevators = []
        for (let i = 0; i < 3; i++ ) {
            const elevator = new Elevator(i, this.height)
            this.elevators.push(elevator)
        }
    
        this.floors = [];
        for (let i = 0; i <= this.height; i++) {
            const click = (event: Event) => {
                event.preventDefault()
                this.callElevator(i)
            }
            const floor = new Floor(i, click);
            this.floors.push(floor)
        }
    }
 
    public callElevator(n: number) {
        // find if an elevator is already there
        const onTheFloor = this.elevators.find(elevator => elevator.floor === n)
        if (onTheFloor) {
            onTheFloor.goToFloor(n)
            return
        }
        
        this.elevators.sort((a, b) => (Math.abs(n - a.floor)) - (Math.abs(n - b.floor)))
        this.elevators[0].goToFloor(n)
    }
 
    public render() {
        const palace = document.createElement('div')
        
        palace.classList.add('palace')
            this.floors.forEach(floor => {
            palace.prepend(floor.element)
        })
        
        this.elevators.forEach(elevator => {
            palace.append(elevator.element)
        })

        document.querySelector('#app')?.append(palace)
    }
 
}