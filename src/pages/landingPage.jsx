import "./landingPage.css";
import React  from 'react';
import  UpperNavbar from "../components/navbar/navbar";
import Button from "../components/button/button";
import div1Cat from "../assets/div1Cat.svg";
import filledStar from "../assets/filledStar.svg";
import thinsmooth from "../assets/thinsmooth.svg";
import image104 from "../assets/image104.svg";
import image105 from "../assets/image105.svg";
import image106 from "../assets/image106.svg";
import image107 from "../assets/image107.svg";
import NFTCard from "../components/nftCard/nftCard";
import Ellipse129 from "../assets/Ellipse129.svg";
import CardNFT from "../components/Cardnft/cardnft";
const Main = () => {
    return(
<div className="LandingPage">
<UpperNavbar/>
<div className="div1Main">
    <div className="div1Left">
    <img className="fillstar" src={filledStar} alt="FilledStar"/>
        <h1>We Have High</h1>
        <h1>
        <span className="quality">Quality</span> 
       <span className="nft"> NFT</span>
        </h1>
        <h1>Collections</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Rhoncus massa 
    suspendisse turpis sed viverra tempus tortor. Habitant
     accumsan sagittis in facilisi placerat ac. Laoreet 
     scelerisque viverra viverra ornare fermentum faucibus sit
      purus volutpat. Egestas lectus ornare convallis ornare
       nullam enim neque.</p>
       <div>
       <Button text="Get Whitelist" bgColor="#DA8F4D" textColor="#FFFFFF" />
       <Button text="Contact Us" bgColor="Transparent" textColor="#FFFFFF" marginLeft="30px" />
       </div>
       <div className="Calculations">
       <div className="item">
        <h1>240k+</h1>
        <p>Total Sale</p>
       </div>
      <div className="item">
      <h1>100k+</h1>
      <p>Auctions</p>
      </div>
      <div className="item">
      <h1>240k+</h1>
      <p>Artists</p>
      </div>
       </div>
    </div>
<div className="div1Right">
<img className="cat" src={div1Cat} alt="FilledStar"/>
<div className="chivron">
    <span className="chevron-arrow">&gt;</span> 
  </div>
    <img className="thinstar" src={thinsmooth} alt="Div1Image"/>
</div>
</div>
<div className="div2Main">
<h1>About Us</h1>
<div className="innerdiv2">
<div className="div2Left">
    <div className="upperPicture">
    <img src={image104} alt="tiger1" className="tiger-image" />
      <img src={image105} alt="tiger2" className="tiger-image" />
      <img src={image106} alt="tiger3" className="tiger-image" />
      <img src={image107} alt="tiger4" className="tiger-image" />
    </div>
</div>
<div className="div2Right">
    <p>Lorem ipsum dolor sit amet consectetur. 
        Pharetra faucibus donec ultrices eros elit metus 
        morbi aliquam quis. Suspendisse massa ullamcorper tortor 
        morbi nisi leo. Ultrices leo vel tincidunt nunc eget elit.
         Gravida et duis ipsum pellentesque libero. 
         Tellus rhoncus metus et eget mattis fringilla nec id.
          Amet ultrices quam ridiculus tellus. Leo adipiscing 
          tincidunt amet nisi semper adipiscing quam in est. Tempor
           sed dui nunc diam adipiscing at.</p>
  <p>Tellus rhoncus metus et eget mattis fringilla 
    nec id. Amet ultrices quam ridiculus tellus. Leo 
    adipiscing tincidunt amet nisi semper adipiscing 
    quam in est. Tempor sed dui nunc diam adipiscing at.</p>
    <Button text="Connect Wallet" bgColor="gray" textColor="#FFFFFF" border="1px solid #DA8F4D" fontSize="17.5px" />
</div>
</div>
</div>
<div className="div3Main">
<h1> Top Collections</h1>
<p> The largest and unique Super rare NFT marketplace</p>
<p>For crypto-collectibles</p>
<div className="lowerDiv3">
<NFTCard 
        creatorName="James Watson" 
        nftTitle="NFTs Collections"
        imageUrl={Ellipse129} 
      />
      <NFTCard 
        creatorName="James Watson" 
        nftTitle="NFTs Collections"
        imageUrl={Ellipse129} 
      />
      <NFTCard 
        creatorName="James Watson" 
        nftTitle="NFTs Collections"
        imageUrl={Ellipse129} 
      />
     <NFTCard 
        creatorName="James Watson" 
        nftTitle="NFTs Collections"
        imageUrl={Ellipse129} 
      />
      <NFTCard 
        creatorName="James Watson" 
        nftTitle="NFTs Collections"
        imageUrl={Ellipse129} 
      />
      <NFTCard 
        creatorName="James Watson" 
        nftTitle="NFTs Collections"
        imageUrl={Ellipse129} 
      />

      <div className="buttondiv3"><Button text="Explore More" bgColor="gray" textColor="#FFFFFF" border="1px solid #DA8F4D" fontSize="17.5px" />
      </div>
      </div>
</div>
<div className="div4Main">
<h1>Top Creators</h1>
<p>Checkout Top Rated Creators on the NFT Marketplace</p>
<div className="CardDiv">
<CardNFT 
Number="1"
imageUrl={Ellipse129}
Title="Name NFT"
SaleNo="34.53 ETH"/>
<CardNFT 
Number="1"
imageUrl={Ellipse129}
Title="Name NFT"
SaleNo="34.53 ETH"/>
<CardNFT 
Number="1"
imageUrl={Ellipse129}
Title="Name NFT"
SaleNo="34.53 ETH"/>
<CardNFT 
Number="1"
imageUrl={Ellipse129}
Title="Name NFT"
SaleNo="34.53 ETH"/>
<CardNFT 
Number="1"
imageUrl={Ellipse129}
Title="Name NFT"
SaleNo="34.53 ETH"/>
<CardNFT 
Number="1"
imageUrl={Ellipse129}
Title="Name NFT"
SaleNo="34.53 ETH"/>
<CardNFT 
Number="1"
imageUrl={Ellipse129}
Title="Name NFT"
SaleNo="34.53 ETH"/>
<CardNFT 
Number="1"
imageUrl={Ellipse129}
Title="Name NFT"
SaleNo="34.53 ETH"/>
</div>
</div>
<div className="div5Main">
<h1>
Road Map
</h1>
<div className="innerdiv5">
    {/* <img src={ } alt="Image"/> */}
</div>
</div>
<div className="div6Main">

</div>
</div>
    );
};
export default Main;