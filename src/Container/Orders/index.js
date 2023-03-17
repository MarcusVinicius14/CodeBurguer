import React, { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Trash from "../../Assets/trash.svg";
import logoOrders from "../../Assets/logoOrders.svg"
import { Container,ContainerItens ,Div, Imagem, H1, Order, Button } from "./styles";

function Orders() {
  
  const [Orders, setOrders] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {

    async function fatchOrders() {
      const {data: newOrder} = await axios.get("http://localhost:3001/orders")

      setOrders(newOrder)
    }
    fatchOrders()
  },[])

async function deleteOrder(orderId) {
  await axios.delete(`http://localhost:3001/orders/${orderId}`)
  const newOrders = Orders.filter((order) => order.id !== orderId)
  setOrders(newOrders)
}


  function goBackPage() {
    navigate("/")
  }

  return (
    
    <Container>
      <Imagem alt="pedidos" src={logoOrders} />

      <ContainerItens >
        <H1>Pedidos</H1>

        <ul>
          {Orders.map((order) => (
            <Order key={order.id}>
              <Div><p nameCaixa={true}>{order.name}</p> <p>{order.order}</p></Div>
              <button onClick={()=> deleteOrder(order.id)}>
                <img src={Trash} alt="lata de lixo"/>
              </button>
            </Order>
          ))}
        </ul>
        

        <Button  onClick={goBackPage}> Voltar </Button>
      </ContainerItens>
    </Container>
  );
}

export default Orders;
