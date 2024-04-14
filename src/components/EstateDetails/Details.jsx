/* eslint-disable react/prop-types */

import Address from "./Address";
import Description from "./Description";
import Features from "./Features";
import OverView from "./OverView";
import ScheduleTour from "./ScheduleTour";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const estatesData = useLoaderData();
  const { id } = useParams();

  const estates = estatesData.estates;

  const estate = estates.find((estate) => estate.id === parseInt(id));

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        <div className="flex justify-between ">
          <div>
            <div>
              <h1 className="md:text-3xl font-medium">{estate.estate_title}</h1>
            </div>
            <div className="flex  gap-3 flex-col md:flex-row mt-2 mb-4">
              <div>
                <p className="font-medium">{estate.location.city}</p>
              </div>
              <div className="flex gap-3">
                <p>
                  Status: For{" "}
                  <span className="font-medium italic">{estate.status}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-right">
              <h1 className="md:text-2xl"> Price {estate.price}</h1>
              <p className="text-sm md:text-base">${estate.price_per_sqft} / sq ft</p>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <img
            className="h-1/2 rounded-xl "
            src="/src/assets/images/h1.jpg"
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
