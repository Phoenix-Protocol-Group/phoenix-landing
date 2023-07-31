import LogoImage from "../../images/logo.png";
import BurgerImage from "../../images/burger.png";
import LogoSmallImage from "../../images/logoSmall.png";
import PhoenixImage from "../../images/logoPhoenix.png";
import StellarImage from "../../images/logoStellar.png";
import TImage from "../../images/logoT.png";
import TrackAssetsImage from "../../images/trackAssets.png";

const Logo = () => <img src={LogoImage} />;
const Burger = () => <img src={BurgerImage} />;
const LogoPhoenix = () => <img src={PhoenixImage} />;
const LogoStellar = () => <img src={StellarImage} />;
const LogoT = () => <img src={TImage} />;
const LogoSmall = () => <img src={LogoSmallImage} />;
const TrackAssets = () => <img src={TrackAssetsImage} />;

export {
  Logo,
  Burger,
  LogoPhoenix,
  LogoStellar,
  LogoSmall,
  TrackAssets,
  LogoT,
};
