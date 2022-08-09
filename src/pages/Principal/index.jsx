import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


import { Container } from './styles';

const Principal = () => {
  const {id} = useParams()
 const user = id[0].toUpperCase() + id.slice(1);
  const [mouseIn, setMouseIn] = useState(false);
  const history= useHistory();
  useEffect(() => {
    toast.success(`Bem vindo ${user}`)
  }, []);
function handleMouseEnter(e) {
  setTimeout(() => {
    setMouseIn(true);
  }
  , 1000);
}
function handleMouseLeave(e) {
  setTimeout(() => {
    setMouseIn(false);
  }
  , 1000);
}
function handleButton(){
  toast.success('Você saiu')
  setTimeout(() => {
    history.goBack()
  }
  , 3000);

}
  return (
    <Container mouseIn={mouseIn}>
        <h1  >Olá {user}</h1>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='divCircle'>
      </div>
      <button onClick={handleButton}>Voltar</button>
      <section></section>
    </Container>
  );
};

export default Principal;
