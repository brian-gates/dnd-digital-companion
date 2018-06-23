import { IAirtableConfig } from "./components/reducers/airtable";
import Airtable from "airtable";
import { curry } from "ramda";

export interface ISelectOptions {
    fields?: string[];
    filterByFormula?: string;
    maxRecords?: number;
    pageSize?: number;
    sort?: object[];
    view?: string;
    cellFormat?: string;
    timeZone?: string;
    userLocale?: string;
}

export interface IQuery {
    eachPage: (
        onPage: (records: object[], next: () => void) => void,
        onComplete: (error: Error) => void,
    ) => void;
    firstPage: (
        onComplete: (error: Error, records: object[]) => void,
    ) => void;
}

export const configToBase = ({ apiKey, baseId }: IAirtableConfig) =>
    new Airtable({apiKey}).base(baseId);

export const select = curry((table: string, config: IAirtableConfig, options: ISelectOptions): IQuery => {
    return configToBase(config)(table).select(options);
});

export const selectCharacters = select("Characters");

export const queryToPayload = (query: IQuery): Promise<object[]> =>
    new Promise((resolve, reject) => {
        let totalRecords: object[] = [];
        query.eachPage((pageRecords, next) => {
            totalRecords = [ ...pageRecords, ...totalRecords ];
            next();
        }, (error: Error) => {
            if (error) { reject(error); return; }
            resolve(totalRecords);
        });
    })
;

export const selectSpells = select("Spells");
