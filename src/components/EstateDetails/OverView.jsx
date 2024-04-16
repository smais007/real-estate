import {
  BiBath,
  BiBed,
  BiSolidCarGarage,
  BiCalendarEvent,
  BiExpand,
  BiHomeAlt2,
} from "react-icons/bi";
import { useLoaderData, useParams } from "react-router-dom";

const OverView = () => {
  const estatesData = useLoaderData();
  const { id } = useParams();
  const estates = estatesData.estates;
  const estate = estates.find((estate) => estate.id === parseInt(id));
  return (
    <div className="border p-4 rounded-xl">
      <div className="mb-4">
        <h1 className="text-xl font-medium">Overview</h1>
      </div>
      <div className="   grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        <div className="flex gap-3">
          <div className="  ">
            <BiBed className="text-5xl border p-2 rounded-lg"></BiBed>
          </div>
          <div>
            <p className="font-medium text-lg">Bedroom</p>
            <p>2</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="  ">
            <BiBath className="text-5xl border p-2 rounded-lg"></BiBath>
          </div>
          <div>
            <p className="font-medium text-lg">Bath</p>
            <p>{estate.bath}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="  ">
            <BiSolidCarGarage className="text-5xl border p-2 rounded-lg"></BiSolidCarGarage>
          </div>
          <div>
            <p className="font-medium text-lg">Garage</p>
            <p>{estate.garage}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="  ">
            <BiCalendarEvent className="text-5xl border p-2 rounded-lg"></BiCalendarEvent>
          </div>
          <div>
            <p className="font-medium text-lg">Build Year</p>
            <p>{estate.build_year}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="  ">
            <BiExpand className="text-5xl border p-2 rounded-lg"></BiExpand>
          </div>
          <div>
            <p className="font-medium text-lg">Size</p>
            <p>{estate.area}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="  ">
            <BiHomeAlt2 className="text-5xl border p-2 rounded-lg"></BiHomeAlt2>
          </div>
          <div>
            <p className="font-medium text-lg">Property Type</p>
            <p>{estate.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
