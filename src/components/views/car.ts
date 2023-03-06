import {
    CarType,
    OnRemoveButtonClick,
    OnSelectButtonClick,
    OnChangeEngine,
} from '../types';

export class Car {
    private readonly parentElement: Element;
    private readonly carData: CarType;
    private readonly switchOnEngine: OnChangeEngine;
    private readonly switchOffEngine: OnChangeEngine;
    private readonly onRemoveButtonClick: OnRemoveButtonClick;
    private readonly onSelectButtonClick: OnSelectButtonClick;

    constructor(
        parentElement: Element,
        carData: CarType,
        switchOnEngine: OnChangeEngine,
        switchOffEngine: OnChangeEngine,
        onRemoveButtonClick: OnRemoveButtonClick,
        onSelectButtonClick: OnSelectButtonClick
    ) {
        this.parentElement = parentElement;
        this.carData = carData;
        this.switchOnEngine = switchOnEngine;
        this.switchOffEngine = switchOffEngine;
        this.onRemoveButtonClick = onRemoveButtonClick;
        this.onSelectButtonClick = onSelectButtonClick;
    }

    public draw(): void {
        const wrapper: Element = document.createElement('div');
        wrapper.classList.add('car__wrapper');

        const name: Element = document.createElement('div');
        name.classList.add('car__name');
        name.textContent = this.carData.name;

        const imgCar: HTMLElement = document.createElement('div');
        imgCar.classList.add('car__image');
        imgCar.setAttribute('id', `${this.carData.id}`);
        imgCar.style.backgroundColor = this.carData.color;

        wrapper.appendChild(this.createButtonsChangeCar());
        wrapper.appendChild(this.createButtonsChangeStateCar());
        wrapper.appendChild(name);
        wrapper.appendChild(imgCar);

        this.parentElement.appendChild(wrapper);
    }

    private createButtonsChangeCar(): Element {
        const buttonsCar: Element = document.createElement('div');
        buttonsCar.classList.add('car__buttons');

        const buttonSelect: Element = document.createElement('div');
        buttonSelect.textContent = 'Select';
        buttonSelect.classList.add('button');
        buttonSelect.classList.add('button_select');
        buttonSelect.addEventListener(
            'click',
            this.onSelectButtonClick.bind(this, this.carData)
        );

        const buttonRemove: Element = document.createElement('div');
        buttonRemove.textContent = 'Remove';
        buttonRemove.classList.add('button');
        buttonRemove.classList.add('button_remove');
        buttonRemove.addEventListener(
            'click',
            this.onRemoveButtonClick.bind(this, this.carData.id)
        );

        buttonsCar.appendChild(buttonSelect);
        buttonsCar.appendChild(buttonRemove);

        return buttonsCar;
    }

    private createButtonsChangeStateCar(): Element {
        const startMove = document.createElement('button');
        startMove.classList.add('start');
        startMove.classList.add('button');
        startMove.classList.add('button_light');
        startMove.textContent = 'on';

        const stopMove = document.createElement('button');
        stopMove.classList.add('stop');
        stopMove.classList.add('button');
        stopMove.classList.add('button_light');
        stopMove.disabled = true;
        stopMove.textContent = 'off';

        startMove.addEventListener('click', () => {
            this.switchOnEngine(this.carData.id);
            stopMove.disabled = false;
            startMove.disabled = true;
        });
        stopMove.addEventListener('click', () => {
            stopMove.disabled = true;
            startMove.disabled = false;
            this.switchOffEngine(this.carData.id);
        });

        const wrapperMove = document.createElement('div');
        wrapperMove.classList.add('car__move');
        wrapperMove.appendChild(startMove);
        wrapperMove.appendChild(stopMove);

        return wrapperMove;
    }
}
