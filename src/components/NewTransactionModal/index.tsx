import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeButton,
  TransactionsType,
} from "./styles";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";
import { useContext } from "react";
import { TransactionContext } from '../../contexts/TransactionsContext';
const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});
type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionContext);
  const { register, handleSubmit,control,reset } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues:{
      type:'income'
    }
  });
  async function handleSubmitNewTransactions(data:NewTransactionFormInputs) {
    const { description,type,price,category} = data
 
    await createTransaction({
      description,
      price,
      category,
      type,
    });
    reset()
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form action="" onSubmit={handleSubmit(handleSubmitNewTransactions)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Preço"
            min="0"
            required
            {...register("price",{valueAsNumber: true})}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />
          <Controller 
            name="type"
          control={control}
           render={({field})=>{
            return(
              <TransactionsType onValueChange={field.onChange} value={field.value} > 
              <TransactionTypeButton value="income" variant="income">
                <ArrowCircleUp size={24} />
                Entrada
              </TransactionTypeButton>
              <TransactionTypeButton value="outcome" variant="outcome">
                <ArrowCircleDown size={24} />
                Saida
              </TransactionTypeButton>
            </TransactionsType>
            )
           }} 
          />

          <button type="submit"> Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
function TransactionsContext(TransactionsContext: any): { createTransaction: any; } {
  throw new Error("Function not implemented.");
}

