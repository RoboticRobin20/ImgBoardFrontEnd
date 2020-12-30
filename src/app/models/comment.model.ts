import { User } from './user.model';
import { Image } from './image.model';
export class Comment {
    constructor(public image: Image, public user: User, public title: string, public description: string, public commentKey: string) {}
}
