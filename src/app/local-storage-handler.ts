export class LocalStorageHandler {
    get user(): any{
        return JSON.parse(localStorage.getItem('currentUser'))
    }
}
