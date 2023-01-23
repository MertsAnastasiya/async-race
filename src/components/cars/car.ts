import { OnRemoveButtonClick, OnSelectButtonClick } from './carsList';

export type CarType = {
    id: number;
    name: string;
    color: string;
};

type onClickMove = (carImage: HTMLImageElement) => void;

export class Car {
    private parentElement: Element;
    private carData: CarType;
    private onClickStart: onClickMove;
    private onClickStop: onClickMove;
    private onRemoveButtonClick: OnRemoveButtonClick;
    private onSelectButtonClick: OnSelectButtonClick;

    constructor(parentElement: Element, carData: CarType,
        onClickStart: onClickMove, onClickStop: onClickMove,
        onRemoveButtonClick: OnRemoveButtonClick, onSelectButtonClick: OnSelectButtonClick) {
        this.parentElement = parentElement;
        this.carData = carData;
        this.onClickStart = onClickStart;
        this.onClickStop = onClickStop;
        this.onRemoveButtonClick = onRemoveButtonClick;
        this.onSelectButtonClick = onSelectButtonClick;
    }

    public drawCar() {
        const wrapperCar: Element = document.createElement('div');
        wrapperCar.classList.add('car__wrapper');

        const buttonsCar: Element = document.createElement('div');
        buttonsCar.classList.add('car__buttons');

        const buttonSelect: Element = document.createElement('div');
        buttonSelect.textContent = 'Select';
        buttonSelect.classList.add('button');
        buttonSelect.classList.add('button_select');
        buttonSelect.addEventListener('click', () => {
            this.onSelectButtonClick(this.carData);
            console.log('click select');
        });

        const buttonRemove: Element = document.createElement('div');
        buttonRemove.textContent = 'Remove';
        buttonRemove.classList.add('button');
        buttonRemove.classList.add('button_remove');
        buttonRemove.addEventListener('click', () => {
            this.onRemoveButtonClick(this.carData.id);
            console.log('click remove');
        });

        buttonsCar.appendChild(buttonSelect);
        buttonsCar.appendChild(buttonRemove);

        const name: Element = document.createElement('div');
        name.classList.add('car__name');
        name.textContent = this.carData.name;

        const imgCar: HTMLImageElement = document.createElement('img');
        imgCar.setAttribute('src', './assets/img/car.svg');

        imgCar.classList.add('car__image');
        imgCar.style.fill = '#ff74b3';

        const startMove = document.createElement('div');
        startMove.classList.add('start');
        startMove.classList.add('button');
        startMove.classList.add('button_light');
        startMove.textContent = 'on';
        startMove.addEventListener('click', () => {
            this.onClickStart(imgCar);
        });

        const stopMove = document.createElement('div');
        stopMove.classList.add('stop');
        stopMove.classList.add('button');
        stopMove.classList.add('button_light');
        stopMove.textContent = 'off';
        stopMove.addEventListener('click', () => {
            this.onClickStop(imgCar);
        });

        const wrapperMove = document.createElement('div');
        wrapperMove.classList.add('car__move');
        wrapperMove.appendChild(startMove);
        wrapperMove.appendChild(stopMove);

        wrapperCar.appendChild(buttonsCar);
        wrapperCar.appendChild(wrapperMove);
        wrapperCar.appendChild(name);
        wrapperCar.appendChild(imgCar);

        this.parentElement.appendChild(wrapperCar);
    }
}
