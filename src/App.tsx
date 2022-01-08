import { useEffect, useState } from 'react'
import * as C from './App.styles'
import { items } from './data/items'
import { Item } from './types/Item'
import { Categories } from './data/Categories'
import { Category } from './types/Category'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilters'
import { TableArea } from './components/TableArea'

const App = () => {

  /*Aqui estará contida a lista completa de gasto de todos os meses, a lista GERAL*/ 
  const [ list, setList ] = useState(items);

  /*Pegará o mês atual */
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth());

  /*Irá filtrar os gastos de cada mês*/
  const [ filteredList, setFilteredList ] = useState<Item[]>([]);

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) )
  },[list, currentMonth])


  return(
    <C.Container>

      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        {/* Área de informações */}

        {/* Área de inserção */}

        {/* Tabela de Itens */}
        <TableArea list={filteredList}/>
      </C.Body>

    </C.Container>
  );
}

export default App;