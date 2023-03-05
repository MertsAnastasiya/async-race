import { Loader } from '../controller/loader';
import { Car } from './car';
import {
    CarType,
    OnRemoveButtonClick,
    OnSelectButtonClick,
    OnStartEngine,
} from '../types';

export class CarsList {
    private onRemoveButtonClick: OnRemoveButtonClick;
    private onSelectButtonClick: OnSelectButtonClick;
    private onStartEngine: OnStartEngine;
    private loader: Loader = new Loader();

    constructor(
        onRemoveButtonClick: OnRemoveButtonClick,
        onSelectButtonClick: OnSelectButtonClick,
        onStartEngine: OnStartEngine
    ) {
        this.onRemoveButtonClick = onRemoveButtonClick;
        this.onSelectButtonClick = onSelectButtonClick;
        this.onStartEngine = onStartEngine;
    }

    public async draw(parentElement: Element): Promise<void> {
        const carsData: CarType[] = await this.loader.getData<CarType[]>('/garage');
        this.updtateHeader(carsData.length);
        carsData.forEach((carData) => {
            const car: Car = new Car(
                parentElement,
                carData,
                (id: number) => this.onStartEngine(id),
                (id: number) => this.onStartEngine(id),
                (id: number) => this.onRemoveButtonClick(id),
                (car: CarType) => this.onSelectButtonClick(car)
            );
            car.draw();
        });
    }

    private updtateHeader(amount: number): void {
        const header: Element = document.querySelector('.h1')!;
        header.textContent = `Garage (${amount})`;
    }
}
