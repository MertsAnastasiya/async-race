import { Loader } from '../controller/loader';
import { CarsList } from '../cars/carsList';
import { CarType } from '../cars/car';
import { Winners } from '../view/winners';

const navigation: Element = document.querySelector('.navigation')!;
const mainContent: Element = document.querySelector('.content')!;
const contentWrapper: Element = document.createElement('div');

export class App {
    private baseUrl: string = 'http://127.0.0.1:3000';
    private loader: Loader = new Loader(this.baseUrl);

    public start() {
        this.generateButtonsLinks();
        this.showGaragePage();
    }

    public showGaragePage(): void {
        mainContent.innerHTML = '';
        mainContent.appendChild(this.generateHeader(4));
        mainContent.appendChild(this.createForms());
        this.updateGarageContent();
    }

    public generateHeader(count: number) {
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
        winPage.drawWinnersPage();
    }

    private createForms(): Element {
        const wrapper = document.createElement('div');
        wrapper.classList.add('forms__wrapper');
        wrapper.appendChild(this.formCreateUpdateCar('create'));
        wrapper.appendChild(this.formCreateUpdateCar('update'));
        return wrapper;
    }

    private formCreateUpdateCar(type: string): Element {
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
        button.addEventListener('click', (event) => this.onButtonCreateUpdateClick(event));

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
        const inputName = document.querySelector('.input_name_create')! as HTMLInputElement;
        const inputColor = document.querySelector('.input_color_create')! as HTMLInputElement;
        const newCar = {
            name: inputName.value,
            color: inputColor.value,
        };
        inputName.value = '';
        this.loader.createCar(newCar);
        this.updateGarageContent();
    }

    private onUpdateButtonClick(): void {
        const inputName = document.querySelector('.input_name_update')! as HTMLInputElement;
        const inputColor = document.querySelector('.input_color_update')! as HTMLInputElement;
        const newCar = {
            name: inputName.value,
            color: inputColor.value,
        };
        inputName.value = '';
        this.loader.updateCar(newCar, Number(inputName.dataset.idCar));
        this.updateGarageContent();
    }

    private onSelectButtonClick(car: CarType): void {
        const inputName = document.querySelector('.input_name_update')! as HTMLInputElement;
        const inputColor = document.querySelector('.input_color_update')! as HTMLInputElement;
        inputName.value = car.name;
        inputColor.value = car.color;
        inputName.dataset.idCar = String(car.id);
    }

    private onRemoveButtonClick(id: number): void {
        this.loader.deleteCar(id);
        this.updateGarageContent();
    }

    private updateGarageContent() {
        contentWrapper.innerHTML = '';
        const carsList = new CarsList(
            (id: number) => this.onRemoveButtonClick(id),
            (car: CarType) => this.onSelectButtonClick(car)
        );
        carsList.drawList(this.loader, contentWrapper);
        mainContent.appendChild(contentWrapper);
    }
}
