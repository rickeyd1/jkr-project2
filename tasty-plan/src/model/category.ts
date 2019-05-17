export class Category {
    categoryId: number;
    categoryName: String;

    constructor(categoryId = 0, categoryName = '') {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
    }
}