import { Loader } from '../controller/loader';
import { Car, CarType } from './car';

export type OnRemoveButtonClick = (id: number) => void;

export class CarsList {
    private onRemoveButtonClick: OnRemoveButtonClick;

    constructor(onRemoveButtonClick: OnRemoveButtonClick) {
        this.onRemoveButtonClick = onRemoveButtonClick;
    }

    public drawList(loader: Loader, parentElement: Element) {
        loader.getData<CarType[]>('/garage')
            .then((carsData) => {
                carsData.forEach((carData) => {
                    const car: Car = new Car(
                        parentElement,
                        carData,
                        (carImage: HTMLDivElement) => this.moveCarStart(carImage),
                        (carImage: HTMLDivElement) => this.moveCarStop(carImage),
                        (id: number) => this.onRemoveButtonClick(id));
                    car.drawCar();
                });
            });
    }

    private moveCarStart(carImage: HTMLDivElement) {
        carImage.style.left = '500px';
        console.log('click start');
    }

    private moveCarStop(carImage: HTMLDivElement) {
        carImage.style.left = '0';
        console.log('click stop');
    }
}
