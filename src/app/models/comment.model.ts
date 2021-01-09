// import { User } from './user.model';
// import { Image } from './image.model';
export class Comment {
    constructor(public imageKey: string, public userEmail: string, public title: string, public description: string, public commentKey: string) {}
}
