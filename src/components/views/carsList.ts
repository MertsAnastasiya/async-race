import { Loader } from '../controller/loader';
import { Car } from './car';
import {
    CarType,
    OnRemoveButtonClick,
    OnSelectButtonClick,
    OnStartEngine,
} from '../types';

export class CarsList {
    private readonly parent: Element;
    private readonly currentPage: number;
    private readonly onRemoveButtonClick: OnRemoveButtonClick;
    private readonly onSelectButtonClick: OnSelectButtonClick;
    private readonly onStartEngine: OnStartEngine;
    private readonly loader: Loader = new Loader();

    constructor(
        parent: Element,
        currentPage: number,
        onRemoveButtonClick: OnRemoveButtonClick,
        onSelectButtonClick: OnSelectButtonClick,
        onStartEngine: OnStartEngine
    ) {
        this.parent = parent;
        this.currentPage = currentPage;
        this.onRemoveButtonClick = onRemoveButtonClick;
        this.onSelectButtonClick = onSelectButtonClick;
        this.onStartEngine = onStartEngine;
    }

    public async draw(): Promise<void> {
        const carsData: CarType[] = await this.loader.getData<CarType[]>(
            `/garage?_page=${this.currentPage}`
        );
        carsData.forEach((carData) => {
            new Car(
                this.parent,
                carData,
                (id: number) => this.onStartEngine(id),
                (id: number) => this.onStartEngine(id),
                (id: number) => this.onRemoveButtonClick(id),
                (car: CarType) => this.onSelectButtonClick(car)
            ).draw();
        });
    }
}
