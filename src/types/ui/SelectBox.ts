import { ScriptProps } from 'next/script';
import { Key } from 'react';

export type StateType = {
    selected: any;
    opened: boolean;
};

export type SelectType = ScriptProps & {
    options: any;
    multiple?: Boolean;
    label?: string;
    unique?: string;
    onInputChange: Function;
    selected?:any
};

export type OptionType = {
    label:string|number;
    unique:Key|null|undefined
}