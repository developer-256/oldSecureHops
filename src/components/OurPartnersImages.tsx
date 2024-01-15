import React from "react";
import Image from "next/image";
import panasonic from "../assets/Logos/Panasonic.svg";
import Microsoft from "../assets/Logos/Microsoft.svg";
import IBM from "../assets/Logos/IBM.svg";
import Nortel from "../assets/Logos/Nortel.svg";
import hp from "../assets/Logos/hp.svg";
import cisco from "../assets/Logos/cisco.svg";
import AVAYA from "../assets/Logos/AVAYA.svg";
import ProCurve from "../assets/Logos/ProCurve.svg";
import Dell from "../assets/Logos/Dell.svg";
import paxton from "../assets/Logos/paxton.svg";
import APC from "../assets/Logos/APC.svg";
import barracuda from "../assets/Logos/barracuda.svg";
import Belden from "../assets/Logos/Belden.svg";
import Bosch from "../assets/Logos/Bosch.svg";
import brocade from "../assets/Logos/brocade.svg";
import Juniper from "../assets/Logos/Juniper.svg";
import Kantech from "../assets/Logos/Kantech.svg";
import Kisi from "../assets/Logos/Kisi.svg";
import samsang from "../assets/Logos/samsang.svg";
import TDSi from "../assets/Logos/TDSi.svg";
import SonicWall from "../assets/Logos/SonicWall.svg";
import "../../public/OurPartners.css";
import BoschColor from "../../public/Colorlogo/BoschColor.svg";
import brocadeColor from "../../public/Colorlogo/Brocade-Logo-latest.png";
import juniperColor from "../../public/Colorlogo/juniperColorlatest.png";
import KantechColor from "../../public/Colorlogo/KantechColor.svg";
import KisiColor from "../../public/Colorlogo/KisiColor.svg";
import samsangColor from "../../public/Colorlogo/samsangColor.svg";
import BeldenColor from "../../public/Colorlogo/BeldenColor.svg";
import barracudaColor from "../../public/Colorlogo/barracudaColor.svg";
import APCColor from "../../public/Colorlogo/APCColor.svg";
import paxtonColor from "../../public/Colorlogo/paxtonColor.svg";
import DellColor from "../../public/Colorlogo/DellColor.svg";
import ProCurveColor from "../../public/Colorlogo/ProCurveColor.svg";
import PanasonicColor from "../../public/Colorlogo/PanasonicColor.svg";
import Nortel1 from "../../public/Colorlogo/NortalColor.png";
import MicroSoft1 from "../../public/Colorlogo/MicroSoft1.svg";
import IBM1 from "../../public/Colorlogo/IBM1.svg";
import AVAYAColor from "../../public/Colorlogo/AVAYAColor.svg";
import hpColor from "../../public/Colorlogo/HP-Logo-latest1.png";
import ciscoColor from "../../public/Colorlogo/cisco-logo-latest.png";

const OurPartnersImages = () => {
  return (
    <div id="slide-container">
      <div id="outer" className="peer-group">
        <Image id="img" src={PanasonicColor} alt="Logo" className=" w-[150px] grayscale opacity-60 " />
        <div id="inner" className="">
          <Image id="img" src={PanasonicColor} alt="Logo" className="w-[150px] " />
        </div>


      </div>

      <div id="outer" className="h-12 w-24">
        <Image id="img" src={Nortel1} alt="Logo" className=" w-[150px] grayscale opacity-60   " />
        <div id="inner" className="h-12 w-24">
          <Image id="img" src={Nortel1} alt="Logo" className="w-[150px] " />
        </div>


      </div>

      <div id="outer" >
        <Image id="img" src={MicroSoft1} alt="Logo" className="w-[150px]  grayscale hover:grayscale-0" />




      </div>

      <div id="outer" className="" >
        <Image id="img" src={hpColor} alt="Logo" className="w-[100px] grayscale opacity-60 " />
        <div id="inner">
          <Image id="img" src={hpColor} alt="Logo" className="w-[100px]  " />
        </div>
      </div>

      <div id="outer">
        <Image id="img" src={ciscoColor} alt="Logo" className="w-[80px] grayscale opacity-60" />
        <div id="inner">
          <Image id="img" src={ciscoColor} alt="Logo" className="w-[80px]" />
        </div>
      </div>

      <div id="outer">
        <Image id="img" src={IBM1} alt="Logo" className="w-[80px] grayscale hover:grayscale-0" />


      </div>
      <div id="outer">
        <Image id="img" src={Dell} alt="Logo" className="w-[50px]" />

        <div id="inner">
          <Image id="img" src={DellColor} alt="Logo" className="w-[50px] " />
        </div>
      </div>

      <div id="outer">
        <Image id="img" src={ProCurve} alt="Logo" className="w-[100px] " />
        <div id="inner">
          <Image id="img" src={ProCurveColor} alt="Logo" className="w-[100px] " />
        </div>
      </div>

      <div id="outer">
        <Image id="img" src={AVAYA} alt="Logo" className="w-[100px]" />
        <div id="inner">
          <Image id="img" src={AVAYAColor} alt="Logo" className="w-[100px] " />
        </div>
      </div>

      <div id="outer">
        <Image id="img" src={paxtonColor} alt="Logo" className="w-[120px] grayscale opacity-60" />
        <div id="inner">
          <Image id="img" src={paxtonColor} alt="Logo" className="w-[120px]" />
        </div>
      </div>

      <div id="outer">
        <Image id="img" src={APC} alt="Logo" className="w-[100px]" />
        <div id="inner">
          <Image id="img" src={APCColor} alt="Logo" className="w-[100px]  " />
        </div>
      </div>

      <div id="outer">
        <Image id="img" src={barracuda} alt="Logo" className="w-[120px] " />
        <div id="inner">
          <Image id="img" src={barracudaColor} alt="Logo" className="w-[120px] " />
        </div>
      </div>

      <div id="outer">
        <Image id="img" src={Belden} alt="Logo" className="w-[100px] " />
        <div id="inner">
          <Image id="img" src={BeldenColor} alt="Logo" className="w-[100px] " />
        </div>
      </div>

      <div id="outer">
        <Image id="img" src={Bosch} alt="Logo" className="w-[130px]" />
        <div id="inner">
          <Image id="img" src={BoschColor} alt="Logo" className="w-[130px] " />
        </div>
      </div>

      <div id="outer" className="">
        <Image id="img" src={brocadeColor} alt="Logo" className="w-[150px] grayscale opacity-60 " />
        <div id="inner">
          <Image id="img" src={brocadeColor} alt="Logo" className="w-[150px]  " />
        </div>
      </div>

      <div id="outer" >
        <Image id="img" src={juniperColor} alt="Logo" className="w-[130px] grayscale opacity-60" />
        <div id="inner">
          <Image id="img" src={juniperColor} alt="Logo" className="w-[130px]  " />
        </div>
      </div>

      <div id="outer">
        <Image id="img" src={Kantech} alt="Logo" className="w-[120px]" />
        <div id="inner">
          <Image id="img" src={KantechColor} alt="Logo" className="w-[120px] " />
        </div>
      </div>

      <div id="outer">
        <Image id="img" src={Kisi} alt="Logo" className="w-[80px]" />
        <div id="inner">
          <Image id="img" src={KisiColor} alt="Logo" className="w-[80px]  " />
        </div>
      </div>

      <div id="outer">
        <Image id="img" src={samsang} alt="Logo" className="w-[130px] " />
        <div id="inner">
          <Image id="img" src={samsangColor} alt="Logo" className="w-[130px] " />
        </div>
      </div>

      <div id="outer">
        <Image id="img" src={SonicWall} alt="Logo" className="w-[150px] grayscale hover:grayscale-0" />
      </div>

      <div id="outer">
        <Image id="img" src={TDSi} alt="Logo" className="w-[100px] grayscale hover:grayscale-0" />
      </div>
    </div>
  );
};

export default OurPartnersImages;
