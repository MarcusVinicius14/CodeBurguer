import React, {useState, useRef} from "react";
import logoHome from '../../Assets/logoHome.svg'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {
  Container,
  Imagem,
  H1,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  DivLabel
} from "./styles";

function Home() {
  const [orders, setOrders] = useState([])  
const inputOrder = useRef()
const inputName = useRef()
const navigate = useNavigate()

async function AddNewOrder() {

const {data: newOrder} = await axios.post("http://localhost:3001/orders", {
  order: inputOrder.current.value,
  name: inputName.current.value
  
})
setOrders([...orders, newOrder])

navigate("/pedidos")
}


  return (
    <Container>
      <Imagem src={logoHome}/>
      <H1>Faça seu pedido!</H1>
      <ContainerItens>
        <DivLabel>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} type="text" placeholder="1 Coca-Cola, 1-X Salada"></Input>
        </DivLabel>
        <DivLabel>
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} type="text" placeholder="Steve Jobs"></Input>
        </DivLabel>
        <Button onClick={AddNewOrder}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
}

export default Home;
