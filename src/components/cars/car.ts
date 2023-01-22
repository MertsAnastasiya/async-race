import { OnRemoveButtonClick } from './carsList';

export type CarType = {
    id: number;
    name: string;
    color: string;
};

type onClickMove = (carImage: HTMLDivElement) => void;

export class Car {
    private parentElement: Element;
    private carData: CarType;
    private onClickStart: onClickMove;
    private onClickStop: onClickMove;
    private onRemoveButtonClick: OnRemoveButtonClick;

    constructor(parentElement: Element, carData: CarType,
        onClickStart: onClickMove, onClickStop: onClickMove,
        onRemoveButtonClick: OnRemoveButtonClick) {
        this.parentElement = parentElement;
        this.carData = carData;
        this.onClickStart = onClickStart;
        this.onClickStop = onClickStop;
        this.onRemoveButtonClick = onRemoveButtonClick
    }

    public drawCar() {
        const wrapperCar = document.createElement('div');
        wrapperCar.classList.add('car__wrapper');

        const buttonsCar = document.createElement('div');
        buttonsCar.classList.add('car__buttons');

        const buttonSelect = document.createElement('div');
        buttonSelect.textContent = 'Select';
        buttonSelect.classList.add('button');
        buttonSelect.classList.add('button_select');
        buttonSelect.addEventListener('click', () => {
            console.log('click select');
        });

        const buttonRemove = document.createElement('div');
        buttonRemove.textContent = 'Remove';
        buttonRemove.classList.add('button');
        buttonRemove.classList.add('button_remove');
        buttonRemove.addEventListener('click', () => {
            this.onRemoveButtonClick(this.carData.id);
            console.log('click remove');
        });

        buttonsCar.appendChild(buttonSelect);
        buttonsCar.appendChild(buttonRemove);

        const name = document.createElement('div');
        name.classList.add('car__name');
        name.textContent = this.carData.name;

        const imgCar = document.createElement('div');
        imgCar.classList.add('car__image');
        imgCar.style.fill = 'red';

        const startMove = document.createElement('div');
        startMove.classList.add('start');
        startMove.classList.add('button');
        startMove.classList.add('button_light');
        startMove.textContent = 'Start';
        startMove.addEventListener('click', () => {
            this.onClickStart(imgCar);
        });

        const stopMove = document.createElement('div');
        stopMove.classList.add('stop');
        stopMove.classList.add('button');
        stopMove.classList.add('button_light');
        stopMove.textContent = 'Stop';
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
