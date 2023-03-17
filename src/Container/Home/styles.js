import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #000000;
align-items: center;
height: 100vh;
`
export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const DivLabel = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`

export const Imagem = styled.img`
margin-top: 30px;
width: 342px;
height: 354px;
`

export const H1 = styled.p`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
text-align: center;
color: #FFFFFF;
margin: 25px 54px;
`

export const InputLabel = styled.p`
margin-top: 42px;
margin-left: 15px;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;
`
export const Input = styled.input`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
border: none;
outline: 0;
padding-left: 15px;
`

export const Button = styled.button`
width: 342px;
height: 68px;
margin: 76px;
background: #D93856;
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