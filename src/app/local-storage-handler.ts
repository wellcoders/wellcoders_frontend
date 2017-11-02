import { User } from './user';

export class SessionStorageHandler {
    get user(): any{
        return JSON.parse(sessionStorage.getItem('currentUser'))
    }

    updateUser(u: User): any {
        return {
            token: this.user.token,
            user: u
        }
    }
}
