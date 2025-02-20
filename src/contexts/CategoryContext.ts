import { createContext, useContext } from 'react';

interface CategoryContextProps {
    category: string;
    changeCategory: (category: string) => void;
}

export const CategoryContext = createContext<CategoryContextProps | undefined>(undefined);

export const useCategory = (): CategoryContextProps => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }
    return context;
};