import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { TransactionContext } from '../../contexts/TransactionsContext';
import { useSummary } from '../../hook/useSummary';
import { priceFormatter } from '../../util/formatter';
import { SummaryCard, SummaryContainer } from './styles';



export function Summary(){
    const summary = useSummary()
  return(
    <SummaryContainer >
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={36} color='#00b37e'/>
        </header>
        <strong>{priceFormatter.format((summary.income))}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saida</span>
          <ArrowCircleDown size={36} color='#f247'/>
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={36} color='#ffff'/>
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}