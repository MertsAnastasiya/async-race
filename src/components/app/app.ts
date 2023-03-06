import { Loader } from '../controller/loader';
import { CarsList } from '../views/carsList';
import { CarType, Engine, NewCarType, Winner } from '../types';
import { Winners } from '../views/winners';
import { Pagination } from '../views/pagination';
import { brands, models } from '../data';

const navigation: Element = document.querySelector('.navigation')!;
const mainContent: Element = document.querySelector('.content')!;
const contentWrapper: Element = document.createElement('div');

export class App {
    private readonly loader: Loader = new Loader();
    private readonly pagination: Pagination = new Pagination(mainContent, this.updateGarageContent.bind(this));
    private readonly generateAmount: number = 100;
    private readonly distance: number = 500;

    public start(): void {
        this.generateNavigation();
        this.showGaragePage();
    }

    public showGaragePage(): void {
        mainContent.innerHTML = '';
        mainContent.appendChild(this.generateHeader());
        this.pagination.draw();
        mainContent.appendChild(this.createForms());
        this.updateGarageContent();
    }

    public generateHeader(): Element {
        const wrapper: Element = document.createElement('div');

        const header: Element = document.createElement('h1');
        header.classList.add('h1');
        header.textContent = `Garage( )`;

        wrapper.append(header);

        return wrapper;
    }

    private generateNavigation(): void {
        const buttonsWrapper: Element = document.createElement('div');
        buttonsWrapper.classList.add('buttons__wrapper');

        const buttonToGarage: Element = document.createElement('div');
        buttonToGarage.textContent = 'To garage';
        buttonToGarage.classList.add('button');
        buttonToGarage.classList.add('button_main');
        buttonToGarage.addEventListener('click', () => {
            this.showGaragePage();
        });

        const buttonToWinners: Element = document.createElement('div');
        buttonToWinners.textContent = 'To winners';
        buttonToWinners.classList.add('button');
        buttonToWinners.classList.add('button_main');
        buttonToWinners.addEventListener('click', this.showWinersPage.bind(this));

        buttonsWrapper.appendChild(buttonToGarage);
        buttonsWrapper.appendChild(buttonToWinners);
        navigation.appendChild(buttonsWrapper);
    }

    private showWinersPage(): void {
        mainContent.innerHTML = '';
        new Winners(mainContent).draw();
    }

    private createForms(): Element {
        const wrapper: Element = document.createElement('div');
        wrapper.classList.add('forms__wrapper');
        wrapper.appendChild(this.createForm('create'));
        wrapper.appendChild(this.createForm('update'));
        wrapper.appendChild(this.createRaceButtons());

        return wrapper;
    }

    private createForm(type: string): Element {
        const inputName: HTMLInputElement = document.createElement('input');
        inputName.type = 'text';
        inputName.classList.add('input');
        inputName.classList.add('input_name');
        inputName.classList.add(`input_name_${type}`);

        const inputColor: HTMLInputElement = document.createElement('input');
        inputColor.type = 'color';
        inputColor.classList.add('input');
        inputColor.classList.add('input_color');
        inputColor.classList.add(`input_color_${type}`);

        const button: HTMLButtonElement = document.createElement('button');
        button.classList.add('button');
        button.classList.add(`button_${type}`);
        button.textContent = type;
        button.addEventListener('click', (event) =>
            this.onButtonCreateUpdateClick(event)
        );

        const fieldsCreate: Element = document.createElement('div');
        fieldsCreate.classList.add(`wrapper__${type}`);
        fieldsCreate.appendChild(inputName);
        fieldsCreate.appendChild(inputColor);
        fieldsCreate.appendChild(button);

        return fieldsCreate;
    }

    private onButtonCreateUpdateClick(event: Event): void {
        const target: Element = event.target as Element;
        if (target.classList.value.includes('button_create')) {
            this.onCreateButtonClick();
        }
        if (target.classList.value.includes('button_update')) {
            this.onUpdateButtonClick();
        }
    }

    private onCreateButtonClick(): void {
        const inputName: HTMLInputElement = document.querySelector<HTMLInputElement>(
            '.input_name_create')!;
        const inputColor: HTMLInputElement = document.querySelector<HTMLInputElement>(
            '.input_color_create')!;
        const newCar: NewCarType = {
            name: inputName.value,
            color: inputColor.value,
        };
        inputName.value = '';
        this.loader.createCar(newCar);
        this.updateGarageContent();
    }

    private onUpdateButtonClick(): void {
        const inputName: HTMLInputElement = document.querySelector<HTMLInputElement>(
            '.input_name_update')!;
        const inputColor: HTMLInputElement = document.querySelector<HTMLInputElement>(
            '.input_color_update')!;
        const newCar: NewCarType = {
            name: inputName.value,
            color: inputColor.value,
        };
        inputName.value = '';
        this.loader.updateCar(newCar, Number(inputName.dataset.idCar));
        this.updateGarageContent();
    }

    private onSelectButtonClick(car: CarType): void {
        const inputName: HTMLInputElement =
            document.querySelector<HTMLInputElement>('.input_name_update')!;
        const inputColor: HTMLInputElement =
            document.querySelector<HTMLInputElement>('.input_color_update')!;
        inputName.value = car.name;
        inputColor.value = car.color;
        inputName.dataset.idCar = String(car.id);
    }

    private onRemoveButtonClick(id: number): void {
        this.loader.deleteCar(id);
        this.updateGarageContent();
    }

    private updateGarageContent(): void {
        contentWrapper.innerHTML = '';
        new CarsList(
            contentWrapper,
            this.pagination.currentPage,
            (id: number) => this.onRemoveButtonClick(id),
            (car: CarType) => this.onSelectButtonClick(car),
            (id: number) => this.switchOnEngine(id)
        ).draw();
        mainContent.appendChild(contentWrapper);
        this.updateInfo();
    }

    private async switchOnEngine(id: number): Promise<void> {
        const car: HTMLElement = document.getElementById(String(id))!;
        const width: number = car.parentElement!.offsetWidth - 90;
        this.setAnimationParametrs(car, width, id);
    }

    private createRaceButtons(): Element {
        const wrapper: Element = document.createElement('div');
        wrapper.classList.add('wrapper');

        const buttonRace: Element = document.createElement('div');
        buttonRace.classList.add('button');
        buttonRace.classList.add('button_race');
        buttonRace.textContent = 'Race';
        buttonRace.addEventListener('click', () => {
            const cars: NodeListOf<HTMLElement> =
                document.querySelectorAll('.car__image');
            cars.forEach(async (car) => {
                const width: number = car.parentElement!.offsetWidth - 90;
                this.setAnimationParametrs(car, width, Number(car.getAttribute('id')));
            });
        });

        const buttonReset: Element = document.createElement('div');
        buttonReset.classList.add('button');
        buttonReset.classList.add('button_reset');
        buttonReset.textContent = 'Reset';

        const buttonGenerate: Element = document.createElement('div');
        buttonGenerate.classList.add('button');
        buttonGenerate.classList.add('button_reset');
        buttonGenerate.textContent = 'Generate cars';
        buttonGenerate.addEventListener('click', () => {
            this.generateCars();
            this.updateGarageContent();
        });

        wrapper.append(buttonRace);
        wrapper.append(buttonReset);
        wrapper.append(buttonGenerate);
        return wrapper;
    }

    private generateCars(): void {
        let n: number = 0;
        while (n !== this.generateAmount) {
            n++;
            const newCar = {
                name: this.generateName(),
                color: this.generateColor(),
            };
            this.loader.createCar(newCar);
        }
    }

    private async setAnimationParametrs(car: HTMLElement, width: number, id: number): Promise<void> {
        car.style.setProperty('--road-width', `${width}px`);
        const dataEngine: Engine = await this.loader.getEngineData<Engine>(1);
        const time: number = Number((this.distance / dataEngine.velocity).toFixed(2));
        car.style.animationName = 'race';
        car.style.animationDuration = `${time}s`;
        car.style.animationDelay = '0s';
        car.style.animationTimingFunction = 'linear';
        car.style.animationIterationCount = '1';
        car.style.animationFillMode = 'forwards';
        car.addEventListener('animationend', async () => {
            this.loader.createWinner({'id': id, 'wins': 0, 'time': time});
        });
    }

    private generateName(): string {
        const numberOfBrand: number = Math.floor(
            Math.random() * (brands.length - 1)
        );
        const brand = brands[numberOfBrand]! as keyof typeof models;
        const numberOfModel: number = Math.floor(
            Math.random() * (models[brand].length - 1)
        );

        return `${brand} ${models[brand][numberOfModel]}`;
    }

    private generateColor(): string {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    private updateHeader(amount: number): void {
        const header: Element = document.querySelector('.h1')!;
        header.textContent = `Garage (${amount})`;
    }

    private async updateInfo(): Promise<void> {
        const carsData: CarType[] = await this.loader.getData<CarType[]>(`/garage`);
        this.updateHeader(carsData.length);
        this.pagination.setMaxPage(Math.ceil(carsData.length / this.pagination.limit));
        this.pagination.updatePaginationView();
    }
}
