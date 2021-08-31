class Paginate {

    constructor(length, pages) {
        const [currentPage, setCurrentPage] = pages;
        this.currentPage = currentPage;
        this.setCurrentPage = setCurrentPage;
        this.lastPage = length - 1;
    }

    goToNextPage(selectedPage = 1) {
        const page = this.checkCurrentNotLastThenJump(selectedPage);
        this.setCurrentPage(page);
    }

    goToPreviousPage(selectedPage = 1) {
        const page = this.checkCurrentNotFirstThenJump(selectedPage);
        this.setCurrentPage(page)
    }

    goPageDecide(selected) {
        console.log(selected);
        if (selected > this.currentPage) {
            this.goToNextPage(selected);
        } else if (selected < this.currentPage) {
            this.goToPreviousPage(selected);
        }
    }

    isSelected(index) {
        return (index === this.currentPage)
            || (this.currentPage >= 3 && index === 3 && this.lastPage !== this.currentPage)
            || (this.currentPage === this.lastPage && index === 4);
    }

    checkCurrentNotFirstThenJump(index) {
        return 0 > index ? 0 : index;
    }

    checkCurrentNotLastThenJump(index) {
        return this.lastPage < index ? this.currentPage : index;
    }

    checkCurrentNotFirstThenDecrementByOne() {
        return 0 > this.currentPage - 1 ? 0 : this.currentPage - 1;
    }

    checkCurrentNotLastThenIncrementByOne() {
        return this.lastPage < this.currentPage + 1 ? this.currentPage : this.currentPage + 1;
    }

    checkPage(relative, index) {

    }
}

export default Paginate;