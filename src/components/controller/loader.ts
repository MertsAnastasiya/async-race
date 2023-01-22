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

    public async deleteCar(id: number) {
        await fetch(`${this.baseLink}/garage/${id}`, {
            method: 'DELETE',
        });
    }

}
