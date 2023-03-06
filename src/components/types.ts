export type CarType = {
    id: number;
    name: string;
    color: string;
};

export type NewCarType = {
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

export type OnChangeEngine = (id: number) => void;

export type OnSwitchPage = (currentPage: number) => void;
