class Dom {
    constructor(type, floor, entrance, door, rooms, windows, wallColor) {
        this.type = type;
        this.floor = floor;
        this.entrance = entrance;
        this.door = door;
        this.rooms = rooms;
        this.windows = windows;
        this.wallColor = wallColor;
    }
    wallColor(){
        console.log(this.wallColor)
    }
}

class inside extends Dom {
    constructor(type, floor, entrance, door, rooms, windows, wallColor, bathroom, livingroom, bedroom, area) {
        super(type, floor, entrance, door, rooms, windows, wallColor);
        this.bathroom = bathroom;
        this.livingroom = livingroom;
        this.bedroom = bedroom;
        this.area = area;
    }

    purpose() {
        console.log(`Dom: ${this.type}\nFloor: ${this.floor}\nEntrance: ${this.entrance}\nDoor:${this.door}\nRooms: ${this.rooms}\nWindows: ${this.windows}\nBathroom: ${this.bathroom}\nLivingRoom: ${this.livingroom}\nBedroom: ${this.bedroom}\nArea: ${this.area}`)
    }
}

const os = new inside (
    'Storey',
    '3',
    '1',
    '12',
    '5',
    '6',
    'white'
)

os.purpose();


const is = new inside(
    'Storey',
    '3',
    '1',
    '12',
    '5',
    '6',
    'white',
    '2',
    '2',
    '3',
    '100'
)

is.purpose();