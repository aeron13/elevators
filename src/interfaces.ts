import Floor from "./Floor"
import Elevator from "./Elevator"
import ElevatorButton from "./ElevatorButton"

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
    buttons: Array<ElevatorButton>
    isMoving: boolean
}

interface PalaceInterface {
    height: number
    floors: Array<Floor> 
    elevators: Array<Elevator>
}

export { FloorInterface, ElevatorButtonInterface, ElevatorInterface, PalaceInterface };
