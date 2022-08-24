import React from 'react'

// Const
// const harga = 5000;

// Var
var harga = 50000;
if (true) {
    var harga = 5000;
}

// Let
// let harga = 50000;
// if (true) {
//     let harga = 55000;
// }

const Variable = () => {
  return (
      <div>
          <h2>Harga Buku : Rp.{ harga }</h2>
    </div>
  )
}

export default Variable