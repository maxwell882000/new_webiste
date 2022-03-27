import Paginate from "./Paginate";

export class PaginateWithCallBack extends Paginate {
    constructor(length, pages) {
        super(length, pages);
        this.callBackWhenChanged = () => {};
    }
    goPageDecide(selected){
        super.goPageDecide(selected);
        this.callBackWhenChanged();
    }
}