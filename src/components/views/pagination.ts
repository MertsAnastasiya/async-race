import { OnSwitchPage } from '../types';

export class Pagination {
    public limit: number = 10;
    public currentPage: number = 1;
    public maxPage: number;
    private readonly onSwitchPage: OnSwitchPage;

    constructor(onSwitchPage: OnSwitchPage) {
        this.onSwitchPage = onSwitchPage;
        this.maxPage = this.currentPage;
    }

    public draw(): void {
        const wrapper: Element = document.createElement('div');
        wrapper.classList.add('wrapper');
        wrapper.classList.add('pagination__container');

        const buttonPrev: Element = document.createElement('div');
        buttonPrev.classList.add('pagination__button');
        buttonPrev.classList.add('button_prev');
        buttonPrev.classList.add('pagination__button_inactive');
        buttonPrev.textContent = '<';
        buttonPrev.addEventListener('click', this.showPrevPage.bind(this));

        const currentPage: Element = document.createElement('div');
        currentPage.classList.add('pagination__page');
        currentPage.textContent = `${this.currentPage}`;

        const buttonNext: Element = document.createElement('div');
        buttonNext.classList.add('pagination__button');
        buttonNext.classList.add('button_next');
        buttonNext.textContent = '>';
        buttonNext.addEventListener('click', this.showNextPage.bind(this));

        wrapper.append(buttonPrev);
        wrapper.append(currentPage);
        wrapper.append(buttonNext);

        document.querySelector('.content')!.append(wrapper);
    }

    private showPrevPage(): void {
        this.currentPage--;
        this.updatePaginationView();
        this.onSwitchPage(this.currentPage);
    }

    private showNextPage(): void {
        if (this.currentPage === this.maxPage) {
            this.updatePaginationView();
            return;
        }
        this.currentPage++;
        this.updatePaginationView();

        this.onSwitchPage(this.currentPage);
    }

    public updatePaginationView(): void {
        const buttonPrev: HTMLElement =
            document.querySelector<HTMLElement>('.button_prev')!;
        const buttonNext: HTMLElement =
            document.querySelector<HTMLElement>('.button_next')!;

        if (this.currentPage === 1) {
            buttonPrev.classList.add('pagination__button_inactive');
        }
        if (this.currentPage === 2) {
            buttonPrev.classList.remove('pagination__button_inactive');
        }
        //         if (this.currentPage > 1) {
        //             buttonPrev.classList.remove('pagination__button_inactive');
        //         }
        //         console.log(this.maxPage);
        //
        if (this.currentPage === this.maxPage) {
            buttonNext.classList.add('pagination__button_inactive');
        }
        //         if (this.currentPage < this.maxPage) {
        //             buttonNext.classList.remove('pagination__button_inactive');
        //         }

        // if (this.currentPage !== this.maxPage) {
        //     buttonNext.classList.remove('pagination__button_inactive');
        // }
        // if (this.currentPage !== 1 && this.currentPage === 2) {
        //     buttonPrev.classList.remove('pagination__button_inactive');
        // }
        // if (this.currentPage === this.maxPage - 1) {
        //     buttonNext.classList.remove('pagination__button_inactive');
        // }
        const pageNumber: HTMLElement =
            document.querySelector<HTMLElement>('.pagination__page')!;
        pageNumber.textContent = `${this.currentPage}`;
    }

    public setMaxPage(max: number): void {
        this.maxPage = max;
    }
}
