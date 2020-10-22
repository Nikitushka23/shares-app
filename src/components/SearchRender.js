import React from 'react'
import {useSelector} from 'react-redux'

export const SearchRender = () => {
    const data = useSelector(state => state.data)
    const selected = useSelector(state => state.selected)
    return Object.entries(data).map(
      ([
        n,
        {
          symbol,
          sector,
          askPrice,
          askSize,
          bidPrice,
          bidSize,
          lastSalePrice,
          lastSaleSize,
          lastSaleTime,
          volume,
        },
      ]) =>
        selected === symbol ? (
          <div className="share-card-founded" key={n}>
            <div>
              <h4>{symbol}</h4>
              <p>In sector: {sector}</p>
              <p>Volume : {volume}</p>
              <div>
                <p className="fat-text">Ask</p>
                <span>Size : {askSize}</span>
                <span>Price : {askPrice}</span>
              </div>
              <div>
                <p className="fat-text">Bid</p>
                <span>Size : {bidSize}</span>
                <span>Price : {bidPrice}</span>
              </div>
              <div>
                <p className="fat-text">Last sale</p>
                <span>Price : {lastSalePrice}</span>
                <span>Size : {lastSaleSize}</span>
                <p>Time : {new Date(lastSaleTime).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
    );
  };