import { IBreed } from './breed';

export interface IAnimal {
    type: string;
    breeds: IBreed[];
}
