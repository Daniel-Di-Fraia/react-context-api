import { createContext,useState } from 'react';

const BudgetContext = createContext();

//creazione provider
const BudgetProvider = ({ children }) => {

    const [budgetMode, setBudgetMode] = useState(false);

    return (
        <BudgetContext.Provider
            value={{ budgetMode, setBudgetMode }}>
            {children}
        </BudgetContext.Provider>
    )

}

export {BudgetProvider , BudgetContext}