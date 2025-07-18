export const getGridSpanClass = (colSpan, rowSpan) => {
    let colClass = '';
    let rowClass = '';

    switch (colSpan) {
        case 3: colClass = 'col-span-3 sm:col-span-6 md:col-span-3'; break;
        case 6: colClass = 'col-span-3 sm:col-span-6'; break;
        default: colClass = 'col-span-1';
    }

    switch (rowSpan) {
        case 1: rowClass = 'row-span-1'; break;
        case 2: rowClass = 'md:row-span-2 '; break;
        case 3: rowClass = 'md:row-span-3 '; break;
        default: rowClass = 'row-span-1';
    }

    return `${colClass} ${rowClass}`;
};
