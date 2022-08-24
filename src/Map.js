import React from 'react'

const makanans = [

    {
        nama: 'Balado',
        harga: 15000
    },

    {
        nama: 'Telor Gulung',
        harga: 10000
    },

    {
        nama: 'Bakso',
        harga: 15000
    },

    {
        nama: 'Mie Baso',
        harga: 10000
    },
];

//Reduce
const total_bayar = makanans.reduce((total_harga, makanan) => {
    
})

const Map = () => {
  return (
      <div>
          <h2>Map Sederhana</h2>
          <ul>
              {makanans.map((makanan, index) => (
                  <li>{index + 1}. {makanan.nama} Harga : Rp.{ makanan.harga }</li>
              ))}

          </ul>

          <h2>Map Filter harga yang lebih dari 10000</h2>
           <ul>
              {makanans.filter((makanan) => makanan.harga > 10000)
                .map((makanan, index) => (
                  <li>{index + 1}. {makanan.nama} Harga : Rp.{ makanan.harga }</li>
              ))}

          </ul>
    </div>
  )
}

export default Map