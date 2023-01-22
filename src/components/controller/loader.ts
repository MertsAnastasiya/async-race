export class Loader {
    private baseLink: string;

    constructor(baseLink: string) {
        this.baseLink = baseLink;
    }

    public request(url: string): Promise<Response> {
        return fetch(url)
    }

    public async getData<T>(options: string): Promise<T> {
        return this.request(`${this.baseLink}${options}`)
            .then((response: Response) => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            });
    }

}
