import { Store, combineReducers, Reducer, ReducersMapObject } from "redux";

export default class ReduxRegistery {
    private static instance: ReduxRegistery;

    private constructor() { }

    public static getInstance(): ReduxRegistery {
        if (!ReduxRegistery.instance) {
            ReduxRegistery.instance = new ReduxRegistery();
        }
        return ReduxRegistery.instance;
    }

    private _reducers: ReducersMapObject = {}
    private _store:any;

    public registerStore(store: Store): void {
        this._store = store;
        this.applyChanges();
    }

    public registerReducer(name: string, reducer: Reducer) {
        this._reducers =  {
            ...this._reducers,
            ...{ [name]: reducer }
        };
        this.applyChanges();
    }

    private applyChanges(): void {
        if (this._store && Object.keys(this._reducers).length > 0) {
            (this._store as Store).replaceReducer(combineReducers(this._reducers))
        }   
    }
}