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

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});
type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { register, handleSubmit,control, } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues:{
      type:'income'
    }
  });
  async function handleSubmitNewTransactions(data:NewTransactionFormInputs) {
    await new Promise(resolver=>setTimeout(resolver,2000))
    console.log(data)
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
