import React from 'react';

class CartItem extends React.Component{
   

    increaseQuantity=()=>{
        // console.log('this',this.state);
        // setform 1        
        // this.setState({
        //     qty:this.state.qty+1
        // });
        // another way of doing this 

        //setform 2 
        // it is async 
        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
        },()=>{
            console.log('this.state',this.state);
        });

       
    }

    decreaseQuantity=()=>{
        const {qty}=this.state;

        if(qty==0){
            return;
        }

        this.setState((prevState)=>{
            return {
                qty:prevState.qty-1
            }
        },()=>{
            console.log('this.state',this.state);
        });
       
    }

    render(){
        console.log('this.props',this.props);

        const {price,title,qty}=this.props.product;
        return(
         

            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img style={styles.image} />
                    
                </div>

                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}> Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/*Buttons */}
                    <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg"
                    onClick={()=>this.props.onIncreaseQuantity(this.props.product)} />

                    <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" 
                    onClick={()=>this.props.onDecreaseQuantity(this.props.product)}/>

                    <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
                 </div>
                </div>
            </div>
        );
    }
}


const styles={
    image:{
        height:100,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}


export default CartItem;