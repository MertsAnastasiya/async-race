export class Winners {
    private parentElement: Element;

    constructor(parentElement: Element) {
        this.parentElement = parentElement;
    }

    public drawWinnersPage() {
        const header = document.createElement('h1');
        header.classList.add('h1');
        header.textContent = `Winners(1)`;
        this.parentElement.appendChild(header);
    }
}
