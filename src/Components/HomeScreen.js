import Footer from "./Footer";
import MintedNFT from "./MintedNFT";
import Navbar from "./Navbar";
import NodeLocations from "./NodeLocations";
import Prices from "./Prices";
import Socials from "./Socials";
import SolanaRPC from "./SolanaRPC";
import SpecialAboutNodes from "./SpecialAboutNodes";
import "./HomeScreen.css"


function HomeScreen({setWalletAddress}) {
    return(
        <>
        <Navbar />
        <div className="container">
          <SolanaRPC  setWalletAddress={setWalletAddress}/>
          <NodeLocations />
          <SpecialAboutNodes />
        </div>
        <MintedNFT />
        <Socials />
        <Prices />
        <Footer />
      </>
    )
    
}
export default HomeScreen