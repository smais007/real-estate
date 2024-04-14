/* eslint-disable react/prop-types */
import { useContext } from "react";
import Address from "./Address";
import Description from "./Description";
import Features from "./Features";
import OverView from "./OverView";
import ScheduleTour from "./ScheduleTour";
import { EstateCardContext } from "../../contexts/EstateCardProvider";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const {estates} = useContext(EstateCardContext);
  const selectedEstate = estates.find((estate) => estate.id === id);

  if (!selectedEstate) {
    return <div>Estate not found</div>;
  }
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        <div className="flex justify-between ">
          <div>
            <div>
              <h1 className="text-3xl font-medium">
                {selectedEstate.estate_title}
              </h1>
            </div>
            <div className="flex  gap-3 flex-col md:flex-row mb-4">
              <div>
                <p>{selectedEstate.location}</p>
              </div>
              <div className="flex gap-3">
                <p>{selectedEstate.status}</p>
                <p>{selectedEstate.year}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-right">
              <h1 className="text-2xl">Rent Price ${selectedEstate.price}</h1>
              <p>${selectedEstate.price_per_sqft}/sq ft</p>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <img
            className="h-1/2 rounded-xl "
            src={selectedEstate.image}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-5">
        <div className="w-full md:w-2/3">
          <OverView></OverView>
          <Description></Description>
          <Features></Features>
          <Address></Address>
        </div>
        <div className="w-full md:w-1/3">
          <ScheduleTour></ScheduleTour>
        </div>
      </div>
    </div>
  );
};

export default Details;
