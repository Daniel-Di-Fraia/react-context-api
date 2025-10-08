//importiamo usestate e createcontext da react
//createContext: per creare un nuovo contesto globale
import { createContext, useState } from 'react';

//oggetto che servirà per condividere dati tra componenti senza dover passare props
const BudgetContext = createContext();

//creazione provider componente che conterrà il valore del contesto (tutti i figli ne avranno l'accesso)
const BudgetProvider = ({ children }) => {

    //variabile di stato condivisa
    const [budgetMode, setBudgetMode] = useState(false);

    //provider del contesto
    return (
        <BudgetContext.Provider
            // dati resi disponibili 
            value={{ budgetMode, setBudgetMode }}>
            {/* componenti figli inclusi dal provider */}
            {children}
        </BudgetContext.Provider>
    )

}

export { BudgetProvider, BudgetContext }