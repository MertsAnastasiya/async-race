import { CarType } from '../types';

export class Loader {
    private baseLink: string = 'http://127.0.0.1:3000';

    public async getData<T>(options: string): Promise<T> {
        const data: T = await (await fetch(`${this.baseLink}${options}`)).json();
        return data;
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
