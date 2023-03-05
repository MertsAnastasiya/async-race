import { Loader } from '../controller/loader';
import { Car } from './car';
import { CarType, OnRemoveButtonClick, OnSelectButtonClick, OnStartEngine  } from '../types';

export class CarsList {
    private onRemoveButtonClick: OnRemoveButtonClick;
    private onSelectButtonClick: OnSelectButtonClick;
    private onStartEngine: OnStartEngine;

    constructor(onRemoveButtonClick: OnRemoveButtonClick, onSelectButtonClick: OnSelectButtonClick, onStartEngine: OnStartEngine) {
        this.onRemoveButtonClick = onRemoveButtonClick;
        this.onSelectButtonClick = onSelectButtonClick;
        this.onStartEngine = onStartEngine;
    }

    public drawList(loader: Loader, parentElement: Element) {
        loader.getData<CarType[]>('/garage')
            .then((carsData) => {
                carsData.forEach((carData) => {
                    const car: Car = new Car(
                        parentElement,
                        carData,
                        (event: Event) => this.onStartEngine(event),
                        (event: Event) => this.onStartEngine(event),
                        // (carImage: HTMLImageElement) => this.moveCarStart(carImage),
                        // (carImage: HTMLImageElement) => this.moveCarStop(carImage),
                        (id: number) => this.onRemoveButtonClick(id),
                        (car: CarType) => this.onSelectButtonClick(car)
                    );
                    car.draw();
                });
            });
    }

//     private moveCarStart(carImage: HTMLImageElement) {
//         carImage.style.left = '500px';
//         console.log('click start');
//     }
//
//     private moveCarStop(carImage: HTMLImageElement) {
//         carImage.style.left = '0';
//         console.log('click stop');
//     }
}
