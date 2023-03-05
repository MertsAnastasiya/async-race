export type CarType = {
    id: number;
    name: string;
    color: string;
};

export type Winner = {
    id: number;
    wins: number;
    time: number;
}

export type Engine = {
    velocity: number,
    distanse: number,
}

export type OnRemoveButtonClick = (id: number) => void;
export type OnSelectButtonClick = (car: CarType) => void;
export type OnStartEngine = (event: Event) => void;
