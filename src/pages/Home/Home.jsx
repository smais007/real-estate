import Slider from "../../components/Slider/Slider";

import ChooseUs from "../../components/ChoosUs/ChoosUs";
import EstateCard from "../../components/EstateCard/EstateCard";
import LogoCloudes from "../../components/LogoCloudes/LogoCloudes";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Paradise Cove | Home";
  }, []);
  return (
    <div>
      <Slider></Slider>
      <EstateCard></EstateCard>
      <LogoCloudes></LogoCloudes>
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
