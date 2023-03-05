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
        header.textContent = `Winners(1)`;
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

        const trHeader = document.createElement('tr');
        trHeader.classList.add('tr_header');

        const thNumber = document.createElement('th');
        thNumber.innerText = 'Number';
        const thCar = document.createElement('th');
        thCar.innerText = 'Car';
        const thName = document.createElement('th');
        thName.innerText = 'Name';
        const thWins = document.createElement('th');
        thWins.innerText = 'Wins';
        const thTime = document.createElement('th');
        thTime.innerText = 'Best time';
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

        const tdId: HTMLTableCellElement = document.createElement('td');
        tdId.innerText = String(++this.place);
        const tdCar: HTMLTableCellElement = document.createElement('td');
        tdCar.classList.add('td_image');
        const tdName: HTMLTableCellElement = document.createElement('td');
        const carData: CarType = await this.loader.getData<CarType>(`/garage/${winnerData.id}`);
        tdCar.style.backgroundColor = carData.color;
        tdName.innerText = carData.name;

        const tdWins: HTMLTableCellElement = document.createElement('td');
        tdWins.innerText = String(winnerData.wins);
        const tdTime: HTMLTableCellElement = document.createElement('td');
        tdTime.innerText = String(winnerData.time);

        tr.appendChild(tdId);
        tr.appendChild(tdCar);
        tr.appendChild(tdName);
        tr.appendChild(tdWins);
        tr.appendChild(tdTime);

        table.appendChild(tr);
    }
}
