import { makeAutoObservable } from 'mobx';

export default class UserStore {
  private _isAuth: boolean;
  private _user: string;

  constructor() {
    this._isAuth = false;
    this._user = '';
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }

  setUser(user: string) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get User() {
    return this._user;
  }
}
