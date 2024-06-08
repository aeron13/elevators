import Floor from "./Floor"
import Elevator from "./Elevator"

interface FloorInterface {
    number: number
    element: HTMLElement
    button: HTMLButtonElement
}

interface ElevatorButtonInterface {
    element: HTMLButtonElement
    number: number
}

interface ElevatorInterface {
    id: number
    floor: number
    element: HTMLElement
    speed: number
    buttons: HTMLElement
    doorsOpen: boolean
}

interface PalaceInterface {
    height: number
    floors: Array<Floor> 
    elevators: Array<Elevator>
}

export { FloorInterface, ElevatorButtonInterface, ElevatorInterface, PalaceInterface };
