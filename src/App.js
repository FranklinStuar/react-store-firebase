import React, {useState} from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Blog from './components/Blog';
import Error404 from './components/Error404';
import Home from "./components/Home"
import Store from './components/Store';
import Cart from './components/Cart';

function App() {
  const products = [
      {id:1, name:"Product 1"},
      {id:2, name:"Product 2"},
      {id:3, name:"Product 3"},
      {id:4, name:"Product 4"}
  ]
  const [cart, changeCart] = useState([]);
  
  const addToCart = (idProductToAdd,nameProductToAdd)=>{
    // Si el carrito no tiene elementos entonces agregamos uno.
    if(cart.length === 0){
      changeCart([{id:idProductToAdd, name:nameProductToAdd, cant:1}])
    }
    else{
      // De otra foma tenemos que revisar que el carrito no tenga ya el producto que queremos agregar.
			// Si ya lo tiene entonces actualizamos su valor.
			// Si no tiene el producto entonces lo agregamos.

      // Para poder editar el arreglo tenemos que clonarlo.
      const cartTemp = [...cart]; // los tres puntos son La sintaxis de propagación permite que una expresión se expanda en lugares donde se esperan múltiples argumentos.

      // comprobamos si el carrito contiene el producto que queremos mediante una busqueda 
      // y si lo encuentra devuelve varios valores que son el index y los nuevos valores a asignar
      const productFoundOnCart = cartTemp.filter((productOfCart) =>{
        return productOfCart.id === idProductToAdd
      }).length > 0
      // Si ya tiene el producto entonces lo tenemos que actualizar.
      if(productFoundOnCart){
          // Para ello tenemos que buscarlo, obtener su posicion en el arreglo.
          // Y en base a su posicion ya actualizamos el valor.
          cartTemp.forEach((productOfCart, index) => {
              if(productOfCart.id === idProductToAdd){
                  const cant = cartTemp[index].cant;
                  cartTemp[index] = {
                      id: idProductToAdd, 
                      name: nameProductToAdd, 
                      cant: cant + 1
                  }
              }
          });
      // De otra forma entonces agregamos el producto al arreglo.
      }
      else{
        cartTemp.push({
          id: idProductToAdd, 
          name: nameProductToAdd, 
          cant: 1
        })
      }
      // Por ultimo actualizamos el carrito.
      changeCart(cartTemp)
    }
  }
  return (
    <Contenedor>
			<Menu>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/blog">Blog</NavLink>
				<NavLink to="/store">Store</NavLink>
			</Menu>
			<main>
        <Switch>
          <Route path="/blog" component={Blog}/>
          <Route path="/store">
            <Store 
              products={products} 
              addToCart={addToCart}
            />
          </Route>
          <Route path="/" component={Home} exact={true}/>
          <Route component={Error404}/>
        </Switch>
      </main>
			<aside>
        <Cart 
          cart={cart}
        />
			</aside>
		</Contenedor>
  );
}
const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;
export default App;
