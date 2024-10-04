import React from 'react';
import './cardnft.css'; 

const CardNFT = ({Number , imageUrl , Title , SaleNo }) => {
  return (
    <div className="nft-card1">
      <div className="nft-header1">
      <div className='create1'><div className="circle1">{Number}</div></div>  
      </div>
      <div className="nft-image-container1">
        <img src={imageUrl} alt="NFT Collection" className="nft-image" />
      </div>
      <div className="nft-footer1">
        <h3 className="nft-title1">{Title}</h3>
        <p className="creator-name-footer1">Total Sales: <span className='createNameFooter1'> {SaleNo} </span></p>
      </div>
    </div>
  );
};

export default CardNFT;
