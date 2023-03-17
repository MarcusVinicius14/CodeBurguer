import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #0A0A10;
height: 100vh;
`

export const Imagem = styled.img`
width: 246px;
height: 354px;
margin-top: 30px;
`

export const H1 = styled.p`
 font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
color: #FFFFFF; 
`

export const Order = styled.li`
width: 342px;
height: 101px;
margin-bottom: 20px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 5px;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
button{
    background-color: transparent;
    border: none;
    cursor: pointer;

&:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
} 
p{
  font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
}
`
export const Div = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
padding-left: 10px;
`

export const Button = styled.button`
width: 342px;
height: 68px;
background: rgba(255, 255, 255, 0.14);
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
border: none;
cursor: pointer;
&:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 50px;
`