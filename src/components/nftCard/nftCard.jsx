import React from 'react';
import './NFTCard.css';

const NFTCard = ({ creatorName, imageUrl, nftTitle }) => {
  return (
    <div className="nft-card">
      <div className="nft-header">
        <span className="creator-name">Created by</span>
        <div className="create">
          <div className="circle"></div>
          <p className="createP">{creatorName}</p>
        </div>
      </div>
      <div className="nft-image-container">
        <img src={imageUrl} alt="NFT Collection" className="nft-image" />
      </div>
      <div className="nft-footer">
        {/* Always reserve space for the title, even if it's missing */}
        <h3 className={`nft-title ${!nftTitle ? 'empty-title' : ''}`}>
          {nftTitle ? nftTitle : '\u00A0'} {/* Using non-breaking space */}
        </h3>
        <p className="creator-name-footer">
          Created by <span className="createNameFooter">{creatorName}</span>
        </p>
      </div>
    </div>
  );
};

export default NFTCard;
