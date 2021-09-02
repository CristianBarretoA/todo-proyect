import React from 'react';

/**
 *  Handle the save in local storage
 * @param itemName
 * @param initialValue
 * @returns {{saveItem: saveItem, item: array, loading: boolean, error: boolean}}
 */
export function useLocalStorage ( itemName, initialValue ) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem = localStorageItem
                    ? JSON.parse(localStorageItem)
                    : () => {
                        localStorage.setItem(itemName, JSON.stringify(initialValue));
                        return [];
                    };
                setItem(parsedItem);
                setLoading(false);

            } catch (error) {
                setError(error);
            }
        }, 2000);
    });


    /**
     * Save an item in the local storage
     * @param newItem
     */
    const saveItem = ( newItem ) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    return {
        item,
        saveItem,
        loading,
        error
    };
}