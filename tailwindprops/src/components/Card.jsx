import React from 'react'

function Card(username,btnText="view Details") {
  // console.log("props",props);
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
    <div>
      <img
        src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
        alt="test"
        className="object-cover object-center rounded-t-xl"
      />
    </div>
    <div className="flex flex-col py-3 px-3 pb-10">
      <div className="flex justify-between ">
        <h1 className="font-bold text-white">{ username}</h1>
        <h1>Price</h1>
      </div>
      <div className="flex  justify-between text-white">
        <p>#345</p>
        <p>0.01</p>
      </div>
      <button>{ btnText }</button>
    </div>
  </div>
  )
}

export default Card
