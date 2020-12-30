// import { User } from './user.model';
// import { Image } from './image.model';
export class ImageLike {
    constructor(public userEmail: string, public imageKey: string, public state: boolean, public likeKey: string) {}
}
