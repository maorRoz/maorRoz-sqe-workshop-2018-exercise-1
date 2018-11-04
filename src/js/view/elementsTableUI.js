import $ from 'jquery';
import { createHtmlElementRow } from './elementRowUI';

const table = document.getElementById('elementsTable');


export const clean = () => $('#elementsTable').find('tr:gt(0)').remove();

export const createTable = (model) => {
    const { elementRows } = model;
    clean();
    for(let i = 0; i < elementRows.length; i++){
        let htmlElementRow = createHtmlElementRow(elementRows[i]);
        table.append(htmlElementRow);
    }
};
