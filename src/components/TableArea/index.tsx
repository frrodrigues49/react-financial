import React from 'react';
import * as C from './styles';
import { Item } from '../../types/Item'
import TableItem from '../TableItem'

type Props = {
    list: Item[]
}

const TableArea = ({ list }: Props) => {
  return (
      <C.Table>
          <thead>
              <tr>
                  <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                  <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                  <C.TableHeadColumn>Título</C.TableHeadColumn>
                  <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
              </tr>
          </thead>
          <tbody>
              {list.map((item, i) => (
                <TableItem key={i} item={item} />
              ))}
          </tbody>
      </C.Table>
  )
}

export default TableArea;