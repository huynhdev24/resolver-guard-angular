import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    currentUser = {
        username: 'Nguyen Van Huynh',
        isAdmin: false,
    }
    constructor() {}
}