
class Room{
    floorNum;
    roomNum;
    price;
    #isBooked;
    constructor(floorNum,roomNum,price,isBooked){
        this.floorNum=floorNum;
        this.roomNum=roomNum;
        this.price=price;
        this.#isBooked=isBooked;
    }
    set isBooked (isBooked){
        this.#isBooked=isBooked;
    }
    get isBooked(){
        return this.#isBooked;
    }
    printRoom(){
        console.log("Room Number:"+this.roomNum+"  "+"Floor Number:"+this.floorNum+"  "+"Price is:"+this.price)
    }
    book(){
        this.#isBooked=true;
    }
    isBooked(){
        return this.#isBooked;
    }
}


class SleepingRoom extends Room{
    personCapacity;
    constructor(floorNum,roomNum,price,isBooked,personCapacity){
        super(floorNum,roomNum,price,isBooked)
         this.personCapacity=personCapacity;
    }
}
class RoomWithView extends Room{
    view;
    numberOfBeds;
    constructor(view,numberOfBeds,floorNum,roomNum,price,isBooked){
        super(floorNum,roomNum,price,isBooked)
         this.view=view;
         this.numberOfBeds=numberOfBeds;
    }
}

class Hotel{
    Address;
    NumOfRooms;
    #minFloor;
    #maxFloor;
    rooms =[Room];
    
        set minFloor(minFloor){
            this.#minFloor=minFloor;
        }
        get minFloor(){
            return this.#minFloor;
        }
        set maxFloor(maxFloor){
             this.#maxFloor=maxFloor;
        }
        get maxFloor(){
    
              return this.#maxFloor;
        }
    constructor(Address,NumOfRooms,minFloor,maxFloor,rooms){
        this.Address=Address;
        this.NumOfRooms=NumOfRooms;
        this.#minFloor=minFloor;
        this.#maxFloor=maxFloor;
        this.rooms=rooms;
    }
    printAdvertisemen(){
        console.log("Welcome to"+" "+this.Address+" "+"Hotel!")
    }
    listBookedRooms(){
        for (let i = 0; i < this.rooms.length; i++) {
            if(this.rooms[i].isBooked()==true){
                console.log(this.rooms[i].roomNum)
            }
            
        }
    }

}
const p1 = new Room(4,40,300,false);
p1.printRoom();
p1.isBooked();
console.log(p1.isBooked());

const p2 = new SleepingRoom (3,6,600,899,false);
p2.printRoom();
p2.book();
console.log(p2.isBooked());

const p3 =new RoomWithView("forest",2,4,67,700,false);
p3.printRoom();
p3.isBooked();
console.log(p3.isBooked());


const h1= new Hotel("Hebron",50,1,20,[p1,p2,p3]);
h1.printAdvertisemen();
h1.listBookedRooms();
