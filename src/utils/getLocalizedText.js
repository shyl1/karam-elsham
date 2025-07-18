
export const getLocalizedText = (item, key, lang) => {
    return item?.[`${key}_${lang}`] || item?.[`${key}_en`] || '';
};
