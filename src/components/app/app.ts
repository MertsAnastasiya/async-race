import { Loader } from '../controller/loader';
import { CarsList } from '../cars/carsList';
import { CarType, Engine } from '../types';
import { Winners } from '../view/winners';

const navigation: Element = document.querySelector('.navigation')!;
const mainContent: Element = document.querySelector('.content')!;
const contentWrapper: Element = document.createElement('div');

export class App {
    private loader: Loader = new Loader();

    public start(): void {
        this.generateButtonsLinks();
        this.showGaragePage();
    }

    public showGaragePage(): void {
        mainContent.innerHTML = '';
        mainContent.appendChild(this.generateHeader(5));
        mainContent.appendChild(this.createForms());
        this.updateGarageContent();
    }

    public generateHeader(count: number) {
        // public generateHeader(count: number) {
        const header: Element = document.createElement('h1');
        header.classList.add('h1');
        header.textContent = `Garage(${count})`;
        return header;
    }

    private generateButtonsLinks() {
        const buttonsWrapper = document.createElement('div');
        buttonsWrapper.classList.add('buttons__wrapper');

        const buttonToGarage = document.createElement('div');
        buttonToGarage.textContent = 'To garage';
        buttonToGarage.classList.add('button');
        buttonToGarage.classList.add('button_main');
        buttonToGarage.addEventListener('click', () => {
            this.showGaragePage();
        });

        const buttonToWinners = document.createElement('div');
        buttonToWinners.textContent = 'To winners';
        buttonToWinners.classList.add('button');
        buttonToWinners.classList.add('button_main');
        buttonToWinners.addEventListener('click', () => {
            this.showWinersPage();
        });

        buttonsWrapper.appendChild(buttonToGarage);
        buttonsWrapper.appendChild(buttonToWinners);
        navigation.appendChild(buttonsWrapper);
    }

    private showWinersPage() {
        mainContent.innerHTML = '';
        const winPage: Winners = new Winners(mainContent);
        winPage.draw();
    }

    private createForms(): Element {
        const wrapper: Element = document.createElement('div');
        wrapper.classList.add('forms__wrapper');
        wrapper.appendChild(this.createForm('create'));
        wrapper.appendChild(this.createForm('update'));
        wrapper.appendChild(this.createButtons());
        return wrapper;
    }

    private createForm(type: string): Element {
        const inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.classList.add('input');
        inputName.classList.add('input_name');
        inputName.classList.add(`input_name_${type}`);

        const inputColor = document.createElement('input');
        inputColor.type = 'color';
        inputColor.classList.add('input');
        inputColor.classList.add('input_color');
        inputColor.classList.add(`input_color_${type}`);

        const button = document.createElement('button');
        button.classList.add('button');
        button.classList.add(`button_${type}`);
        button.textContent = type;
        button.addEventListener('click', (event) =>
            this.onButtonCreateUpdateClick(event)
        );

        const fieldsCreate = document.createElement('div');
        fieldsCreate.classList.add(`wrapper__${type}`);
        fieldsCreate.appendChild(inputName);
        fieldsCreate.appendChild(inputColor);
        fieldsCreate.appendChild(button);
        return fieldsCreate;
    }

    private onButtonCreateUpdateClick(event: Event): void {
        const target = event.target as Element;
        if (target.classList.value.includes('button_create')) {
            this.onCreateButtonClick();
            return;
        }
        if (target.classList.value.includes('button_update')) {
            this.onUpdateButtonClick();
            return;
        }
    }

    private onCreateButtonClick(): void {
        const inputName = document.querySelector(
            '.input_name_create'
        )! as HTMLInputElement;
        const inputColor = document.querySelector(
            '.input_color_create'
        )! as HTMLInputElement;
        const newCar = {
            name: inputName.value,
            color: inputColor.value,
        };
        inputName.value = '';
        this.loader.createCar(newCar);
        this.updateGarageContent();
    }

    private onUpdateButtonClick(): void {
        const inputName = document.querySelector(
            '.input_name_update'
        )! as HTMLInputElement;
        const inputColor = document.querySelector(
            '.input_color_update'
        )! as HTMLInputElement;
        const newCar = {
            name: inputName.value,
            color: inputColor.value,
        };
        inputName.value = '';
        this.loader.updateCar(newCar, Number(inputName.dataset.idCar));
        this.updateGarageContent();
    }

    private onSelectButtonClick(car: CarType): void {
        const inputName = document.querySelector(
            '.input_name_update'
        )! as HTMLInputElement;
        const inputColor = document.querySelector(
            '.input_color_update'
        )! as HTMLInputElement;
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
        const carsList = new CarsList(
            (id: number) => this.onRemoveButtonClick(id),
            (car: CarType) => this.onSelectButtonClick(car),
            (event: Event) => this.switchOnEngine(event)
        );
        carsList.draw(contentWrapper);
        mainContent.appendChild(contentWrapper);
    }

    private switchOnEngine(event: Event): void {
        console.log('start');
        this.loader.getEngineData<Engine>(1).then((data: Engine) => {
            const elem = event.target! as HTMLElement;
            const px = elem.offsetWidth;
            console.log(px);
            console.log(data);
        });
    }

    private createButtons(): Element {
        const wrapper: Element = document.createElement('div');
        wrapper.classList.add('wrapper');

        const buttonRace: Element = document.createElement('div');
        buttonRace.classList.add('button');
        buttonRace.classList.add('button_race');
        buttonRace.textContent = 'Race';

        const buttonReset: Element = document.createElement('div');
        buttonReset.classList.add('button');
        buttonReset.classList.add('button_reset');
        buttonReset.textContent = 'Reset';

        const buttonGenerate: Element = document.createElement('div');
        buttonGenerate.classList.add('button');
        buttonGenerate.classList.add('button_reset');
        buttonGenerate.textContent = 'Generate cars';
        buttonGenerate.addEventListener('click', this.generateCars.bind(this));

        wrapper.append(buttonRace);
        wrapper.append(buttonReset);
        wrapper.append(buttonGenerate);
        return wrapper;
    }

    private generateCars(): void {
        let n: number = 0;
        while (n !== 100) {
            n++;
            const newCar = {
                name: this.generateName(),
                color: this.generateColor(),
            };
            this.loader.createCar(newCar);
            console.log(newCar);
        }
    }

    private generateName(): string {
        const namesArray: string[] = [
            'Opel',
            'BMW',
            'Audi',
            'Volvo',
            'Toyota',
            'Mersedes',
            'Honda',
            'VM',
            'Mazda',
            'Peugeot',
            'Citroen',
        ];
        const models = {
            Opel: ['Astra', '1', '2', '3', '5'],
            BMW: ['Serie 3', 'X3', 'X5', 'i4', 'Serie 5'],
            Volvo: ['VC40', 'VC90', '3', '4', '5'],
            Toyota: ['Rav4', '1', '2', '3', '4'],
            Mersedes: ['520', 'Tys', 'Gh', 'Ggf', '8'],
            Honda: ['Civic', 'f', 'g', 'j', 'l'],
            VW: ['Golf', 'f', 's', 'a', 'l'],
            Mazda: ['3', '5', 'CX-60', 'CX-9', 'CX-5'],
            Audi: ['Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
            Peugeot: ['Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
            Citroen: ['Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
        };
        const number: number = Math.floor(
            Math.random() * (namesArray.length - 1)
        );
        const brand = namesArray[number]! as keyof typeof models;

        return `${brand} ${models[brand][4]}`;
    }

    private generateColor(): string {
        return Math.floor(Math.random() * 16777215).toString(16);
    }
}
