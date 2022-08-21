import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { SummaryCard, SummaryContainer } from './styles';



export function Summary(){

  return(
    <SummaryContainer >
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={36} color='#00b37e'/>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saida</span>
          <ArrowCircleDown size={36} color='#f247'/>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={36} color='#ffff'/>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}