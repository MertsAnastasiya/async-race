import { Winners } from '../winners/winners';
import { Loader } from '../controller/loader';
import { CarsList } from '../cars/carsList';

const mainContent: Element = document.querySelector('.content')!;
const navigation: Element = document.querySelector('.navigation')!;

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
        const carsList = new CarsList();
        carsList.drawList(this.loader, mainContent);
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
        mainContent.innerHTML = 'Winners';
    }
}
