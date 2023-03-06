import { CarType, Winner } from '../types';
import { Loader } from '../controller/loader';

export class Winners {
    private parentElement: Element;
    private loader: Loader = new Loader();
    private place: number = 0;

    constructor(parentElement: Element) {
        this.parentElement = parentElement;
    }

    public draw(): void {
        const header: Element = document.createElement('h1');
        header.classList.add('h1');
        header.textContent = `Winners( )`;
        this.parentElement.appendChild(header);
        this.getWinners();
    }

    private async getWinners(): Promise<void> {
        const winnersData: Winner[] = await this.loader.getData<Winner[]>(
            '/winners'
        );
        this.parentElement.appendChild(this.createTable());
        winnersData.sort((a, b) => a.time - b.time);
        winnersData.forEach((winnerData) => {
            this.createTableLine(document.querySelector('.table')!, winnerData);
        });
    }

    private createTable(): Element {
        const table: Element = document.createElement('table');
        table.classList.add('table');

        const trHeader: Element = document.createElement('tr');
        trHeader.classList.add('tr_header');

        const thNumber: Element = document.createElement('th');
        thNumber.textContent = 'Number';
        const thCar: Element = document.createElement('th');
        thCar.textContent = 'Car';
        const thName: Element = document.createElement('th');
        thName.textContent = 'Name';
        const thWins: Element = document.createElement('th');
        thWins.textContent = 'Wins';
        const thTime: Element = document.createElement('th');
        thTime.textContent = 'Best time';
        trHeader.appendChild(thNumber);
        trHeader.appendChild(thCar);
        trHeader.appendChild(thName);
        trHeader.appendChild(thWins);
        trHeader.appendChild(thTime);

        table.appendChild(trHeader);

        return table;
    }

    private async createTableLine(table: Element, winnerData: Winner): Promise<void> {
        const tr: Element = document.createElement('tr');

        const tdId: Element = document.createElement('td');
        tdId.textContent = String(++this.place);
        const tdCar: HTMLElement = document.createElement('td');
        tdCar.classList.add('td_image');
        const tdName: Element = document.createElement('td');
        const carData: CarType = await this.loader.getData<CarType>(`/garage/${winnerData.id}`);
        tdCar.style.backgroundColor = carData.color;
        tdName.textContent = carData.name;

        const tdWins: HTMLElement = document.createElement('td');
        tdWins.textContent = String(winnerData.wins);
        const tdTime: HTMLElement = document.createElement('td');
        tdTime.textContent = String(winnerData.time);

        tr.appendChild(tdId);
        tr.appendChild(tdCar);
        tr.appendChild(tdName);
        tr.appendChild(tdWins);
        tr.appendChild(tdTime);

        table.appendChild(tr);
    }
}
