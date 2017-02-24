export class Post {
    id: number;
    title: string = '';
    body: string = '';
    creationTime: number = 0;
    tags: string[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
