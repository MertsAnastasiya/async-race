import {
    CarType,
    OnRemoveButtonClick,
    OnSelectButtonClick,
    OnStartEngine,
} from '../types';

export class Car {
    private parentElement: Element;
    private carData: CarType;
    private onStartEngine: OnStartEngine;
    private onClickStop: OnStartEngine;
    private onRemoveButtonClick: OnRemoveButtonClick;
    private onSelectButtonClick: OnSelectButtonClick;

    constructor(
        parentElement: Element,
        carData: CarType,
        onStartEngine: OnStartEngine,
        onClickStop: OnStartEngine,
        onRemoveButtonClick: OnRemoveButtonClick,
        onSelectButtonClick: OnSelectButtonClick
    ) {
        this.parentElement = parentElement;
        this.carData = carData;
        this.onStartEngine = onStartEngine;
        this.onClickStop = onClickStop;
        this.onRemoveButtonClick = onRemoveButtonClick;
        this.onSelectButtonClick = onSelectButtonClick;
    }

    public draw() {
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

        const imgCar: HTMLElement = document.createElement('div');
        imgCar.classList.add('car__image');
        imgCar.setAttribute('id', `${this.carData.id}`);
        imgCar.style.backgroundColor = this.carData.color;

        const startMove = document.createElement('div');
        startMove.classList.add('start');
        startMove.classList.add('button');
        startMove.classList.add('button_light');
        startMove.textContent = 'on';
        startMove.addEventListener('click', this.onStartEngine.bind(this, this.carData.id));

        const stopMove = document.createElement('div');
        stopMove.classList.add('stop');
        stopMove.classList.add('button');
        stopMove.classList.add('button_light');
        stopMove.textContent = 'off';
        stopMove.addEventListener('click', this.onClickStop.bind(this, this.carData.id));

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
