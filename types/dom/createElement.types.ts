interface Circle {
    type: "circle";
    radius: number;
}

interface Square {
    type: "square";
    length: number;
}

type TypeName = "circle" | "square"; 

type ObjectType<T> = 
    T extends "circle" ? Circle :
    T extends "square" ? Square :
    never;

const shapes: (Circle | Square)[] = [
    { type: "circle", radius: 1 },
    { type: "circle", radius: 2 },
    { type: "square", length: 10 }];

function getItems<T extends TypeName>(type: T) : ObjectType<T>[]  {
    return shapes.filter(s => s.type == type) as ObjectType<T>[];
}