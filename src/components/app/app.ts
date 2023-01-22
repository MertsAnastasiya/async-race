import { Winners } from '../winners/winners';
import { Loader } from '../controller/loader';
import { CarsList } from '../cars/carsList';

const mainContainer: Element = document.querySelector('.main__container')!;

export class App {
    private baseUrl: string = 'http://127.0.0.1:3000';
    private loader: Loader = new Loader(this.baseUrl);

    public start() {
        this.showGaragePage();
    }

    public showGaragePage() {
       mainContainer.appendChild(this.generateHeader(5));
       const list = new CarsList();
       list.drawList(this.loader, mainContainer);
    }

    public generateHeader(count: number) {
        const header = document.createElement('h1');
        header.classList.add('h1');
        header.textContent = `Garage(${count})`;
        return header;
    }
}
