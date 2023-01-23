import { Engine } from '../app/app';
import { CarType } from '../cars/car';

export class Loader {
    private baseLink: string;

    constructor(baseLink: string) {
        this.baseLink = baseLink;
    }

    public async getData<T>(options: string): Promise<T> {
        return fetch(`${this.baseLink}${options}`)
            .then((response: Response) => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            });
    }

    public async createCar(car: {name: string, color: string}) {
        await fetch(`${this.baseLink}/garage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car),
        });
    }

    public async updateCar(car: {name: string, color: string}, id: number) {
        await fetch(`${this.baseLink}/garage/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car),
        });
    }

    public async deleteCar(id: number) {
        await fetch(`${this.baseLink}/garage/${id}`, {
            method: 'DELETE',
        });
    }

    public async getEngineData<T>(id: number): Promise<T> {
        return fetch(`${this.baseLink}/engine/?id=${id}&status=started`, { method: 'PATCH' })
        .then((response: Response) => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    }
}
