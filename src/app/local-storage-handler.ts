import { User } from './user';

export class LocalStorageHandler {
    get user(): any{
        return JSON.parse(localStorage.getItem('currentUser'))
    }

    updateUser(u: User): any {
        return {
            token: this.user.token,
            user: u
        }
    }
}
