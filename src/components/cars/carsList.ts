import { Loader } from '../controller/loader';
import { Car, CarType } from './car';

export type OnRemoveButtonClick = (id: number) => void;
export type OnSelectButtonClick = (car: CarType) => void;

export class CarsList {
    private onRemoveButtonClick: OnRemoveButtonClick;
    private onSelectButtonClick: OnSelectButtonClick;

    constructor(onRemoveButtonClick: OnRemoveButtonClick, onSelectButtonClick: OnSelectButtonClick) {
        this.onRemoveButtonClick = onRemoveButtonClick;
        this.onSelectButtonClick = onSelectButtonClick;
    }

    public drawList(loader: Loader, parentElement: Element) {
        loader.getData<CarType[]>('/garage')
            .then((carsData) => {
                carsData.forEach((carData) => {
                    const car: Car = new Car(
                        parentElement,
                        carData,
                        (carImage: HTMLImageElement) => this.moveCarStart(carImage),
                        (carImage: HTMLImageElement) => this.moveCarStop(carImage),
                        (id: number) => this.onRemoveButtonClick(id),
                        (car: CarType) => this.onSelectButtonClick(car)
                    );
                    car.drawCar();
                });
            });
    }

    private moveCarStart(carImage: HTMLImageElement) {
        carImage.style.left = '500px';
        console.log('click start');
    }

    private moveCarStop(carImage: HTMLImageElement) {
        carImage.style.left = '0';
        console.log('click stop');
    }
}
