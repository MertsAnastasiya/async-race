import { Loader } from '../controller/loader';
import { Car, CarType } from './car';

export class CarsList {

    public drawList(loader: Loader, mainContainer: Element) {
        loader.getData<CarType[]>('/garage')
            .then((carsData) => {
                carsData.forEach((carData) => {
                    const car: Car = new Car(mainContainer, carData, (carImage: HTMLDivElement) => this.moveCarStart(carImage), (carImage: HTMLDivElement) => this.moveCarStop(carImage));
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
