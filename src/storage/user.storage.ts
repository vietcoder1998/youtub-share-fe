import { ModelName } from '../config/constants';
import { Model } from '../types/model';
import Storage, { StorageItem } from './base.storage';

export class UserStorageItem extends StorageItem<Model.UserModel> {}

export default class UserStorage extends Storage{
    public static readonly instance = new UserStorage(); 
    data= {
        primary: new UserStorageItem(ModelName.user)
    } as Record<string, object>

    get(name: string) {
        return this.data[name]
    }

    set<T>(name: string, value: T & object) {
        this.data[name] = value
    }

    remove(name: string) {
        delete this.data[name] 
    }
}