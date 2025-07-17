export const getGridSpanClass = (colSpan, rowSpan) => {
    let colClass = '';
    let rowClass = '';

    switch (colSpan) {
        case 1: colClass = 'col-span-1'; break;
        case 2: colClass = 'col-span-2'; break;
        case 3: colClass = 'col-span-3'; break;
        case 4: colClass = 'col-span-4'; break;
        case 5: colClass = 'col-span-5'; break;
        case 6: colClass = 'col-span-6'; break;
        case 7: colClass = 'col-span-7'; break;
        case 8: colClass = 'col-span-8'; break;
        default: colClass = 'col-span-1';
    }

    switch (rowSpan) {
        case 1: rowClass = 'row-span-1'; break;
        case 2: rowClass = 'row-span-2'; break;
        case 3: rowClass = 'row-span-3'; break;
        case 4: rowClass = 'row-span-4'; break;
        case 5: rowClass = 'row-span-5'; break;
        case 6: rowClass = 'row-span-6'; break;
        default: rowClass = 'row-span-1';
    }

    return `${colClass} ${rowClass}`;
};
