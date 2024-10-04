import React from 'react';
import './NFTCard.css'; // External CSS (or you can use style d-components)

const NFTCard = ({ creatorName, imageUrl ,nftTitle }) => {
  return (
    <div className="nft-card">
      <div className="nft-header">
        
        <span className="creator-name">Created by</span> 
      <div className='create'><div className="circle"></div><p className='createP'> {creatorName} </p></div>  
      </div>
      <div className="nft-image-container">
        <img src={imageUrl} alt="NFT Collection" className="nft-image" />
      </div>
      <div className="nft-footer">
        <h3 className="nft-title">{nftTitle}</h3>
        <p className="creator-name-footer">Created by <span className='createNameFooter'> {creatorName} </span></p>
      </div>
    </div>
  );
};

export default NFTCard;
