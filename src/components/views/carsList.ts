import { Loader } from '../controller/loader';
import { Car } from './car';
import {
    CarType,
    OnRemoveButtonClick,
    OnSelectButtonClick,
    OnChangeEngine,
} from '../types';

export class CarsList {
    private readonly parent: Element;
    private readonly currentPage: number;
    private readonly onRemoveButtonClick: OnRemoveButtonClick;
    private readonly onSelectButtonClick: OnSelectButtonClick;
    private readonly switchOnEngine: OnChangeEngine;
    private readonly switchOffEngine: OnChangeEngine;
    private readonly loader: Loader = new Loader();

    constructor(
        parent: Element,
        currentPage: number,
        onRemoveButtonClick: OnRemoveButtonClick,
        onSelectButtonClick: OnSelectButtonClick,
        switchOnEngine: OnChangeEngine,
        switchOffEngine: OnChangeEngine
    ) {
        this.parent = parent;
        this.currentPage = currentPage;
        this.onRemoveButtonClick = onRemoveButtonClick;
        this.onSelectButtonClick = onSelectButtonClick;
        this.switchOnEngine = switchOnEngine;
        this.switchOffEngine = switchOffEngine;
    }

    public async draw(): Promise<void> {
        const carsData: CarType[] = await this.loader.getData<CarType[]>(
            `/garage?_page=${this.currentPage}`
        );
        carsData.forEach((carData) => {
            new Car(
                this.parent,
                carData,
                (id: number) => this.switchOnEngine(id),
                (id: number) => this.switchOffEngine(id),
                (id: number) => this.onRemoveButtonClick(id),
                (car: CarType) => this.onSelectButtonClick(car)
            ).draw();
        });
    }
}
