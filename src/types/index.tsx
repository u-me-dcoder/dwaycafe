//https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76
import {Action} from 'redux'
import { ThunkAction } from 'redux-thunk'


export interface FormProps {
    first_name: string;
    last_name: string;
    age: number;
    agreetoterms?: boolean;
}
export interface Product {
    id:()=>string;
        title:string;
        category:string;
        amount:string;
}

export interface MyStore {
    products:[Product];
    cart:Array<Product>;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  {},
  unknown,
  Action<string>
>