import * as C from './styles'
import { Item } from '../../types/Item'
import { formatDate } from '../../helpers/dateFilters'
type Props = {
    item: Item
}
export const TableItem = ({ item }:Props) => {
    return(
        <C.TableLine>
            
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>{item.category}</C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>{item.value.toFixed(2) }</C.TableColumn>
        
        </C.TableLine>
    );
}