import { CarType } from '../cars/car';
import { Loader } from '../controller/loader';

type Winner = {
    id: number;
    wins: number;
    time: number;
}

export class Winners {
    private parentElement: Element;
    private loader: Loader = new Loader('http://127.0.0.1:3000');

    constructor(parentElement: Element) {
        this.parentElement = parentElement;
    }

    public drawWinnersPage() {
        const header = document.createElement('h1');
        header.classList.add('h1');
        header.textContent = `Winners(1)`;
        this.parentElement.appendChild(header);
        this.getWinners();
    }

    private  getWinners(): void {
        this.loader.getData<Winner[]>('/winners')
            .then((winnersData) => {
                this.parentElement.appendChild(this.createTable());

                winnersData.forEach((winnerData) => {
                    this.createTableLine(document.querySelector('.table')!, winnerData);
                });
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

    private createTableLine(table: Element, winnerData: Winner): void {
        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.innerText = String(winnerData.id);
        const tdCar = document.createElement('td');
        tdCar.classList.add('td_image');
        const tdName = document.createElement('td');
        this.loader.getData<CarType>(`/garage/${winnerData.id}`)
            .then((carData) => {
                tdCar.style.background = `url('../assets/img/car.svg') no-repeat`;
                tdCar.style.backgroundSize = 'contain';
                tdCar.style.backgroundColor = carData.color;
                tdCar.style.backgroundPosition = 'center';
                tdName.innerText = carData.name;
            });
        const tdWins = document.createElement('td');
        tdWins.innerText = String(winnerData.wins);
        const tdTime = document.createElement('td');
        tdTime.innerText = String(winnerData.time);

        tr.appendChild(tdId);
        tr.appendChild(tdCar);
        tr.appendChild(tdName);
        tr.appendChild(tdWins);
        tr.appendChild(tdTime);

        table.appendChild(tr);
    }
}
