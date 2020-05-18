import React from 'react';



// const gundam = { gundam }

class GundamList extends React.Component {

  render() {
    const { gundam } = this.props.gundam
    return (
      <div>
        {gundam.map((gundam) => {
          return (
            <>
              <p key={gundam.id}>{gundam.unit}</p>
              <p key={gundam.id}>Grade:{gundam.grade}</p>
              <p key={gundam.id}>Scale:{gundam.scale}</p>
              <p key={gundam.id}>Price:{gundam.price}</p>
              <img key={gundam.id} src={gundam.picture} alt="" />
              <br />
              <a href="/cart" classname="cart-link">Add</a>
              <br />
              <br />
            </>
          )
        })}
      </div>
    );
  }
}

export default GundamList;