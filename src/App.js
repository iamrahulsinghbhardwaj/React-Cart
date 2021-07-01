import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

      constructor(){
        super();
        this.state={
          products:[
                {
                    price:99,
                    title:'Watch',
                    qty:1,
                    img:'data:image/jpeg;base64,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',
                    id:1
                },
                {
                    price:999,
                    title:'Mobile Phone',
                    qty:10,
                    img:'https://static.digit.in/product/284c81498a93a82db7b5db6600494c20bee4f18e.jpeg?tr=w-1200',
                    id:2
                },{
                    price:999,
                    title:'Laptop',
                    qty:4,
                    img:'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
                    id:3
                }
          ]
        }

        //this.increaseQuantity=this.increaseQuantity.bind(this); or we can use arrow function
      }

      handleIncreaseQuantity=(product)=>{
        const {products}=this.state;

        const index=products.indexOf(product);

        products[index].qty+=1;

        this.setState({
            products:products
        })

      }

      handleDecreaseQuantity=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        
        if(products[index].qty==0){
            return;
        }
        products[index].qty-=1;

        this.setState({
            products:products
        })
      }

      handleDeleteProduct=(id)=>{
        const {products}=this.state;

        const items=products.filter((item)=>item.id!=id);

        this.setState({
            products:items
        })
      }

      getCartCount=()=>{
        const{products}=this.state;

        let count=0;

        products.forEach((product)=>{
          count+=product.qty;
        })

        return count;
      }

      getCartTotal=()=>{
        const {products}=this.state;

        let cartTotal=0;

        products.map((product)=>{
          cartTotal=cartTotal+product.qty*product.price
        })

        return cartTotal;
      }

  render(){
    const {products}=this.state;

    return (
      <div className="App">

      <Navbar count={this.getCartCount()}/>
       <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity} 
        onDeleteProduct={this.handleDeleteProduct}
       />
       <div style={{padding:10 ,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
  
}

export default App;
