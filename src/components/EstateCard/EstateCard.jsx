import { useState } from "react";
import { BiArea } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";

export default function EstateCard() {
  const [statusFilter, setStatusFilter] = useState("");
  const handleFilter = (status) => {
    setStatusFilter(status);
  };

  const estates = useLoaderData();

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2
            data-aos="zoom-out"
            data-aos-duration="1000"
            className="text-lg md:text-3xl font-bold"
          >
            Discover Popular Properties
          </h2>
          <div className="flex justify-between items-center">
            <div>
              <p
                data-aos="zoom-out"
                data-aos-duration="1000"
                className="pt-4 mb-5 text-sm md:text-base"
              >
                Escape to the idyllic countryside of Provence in this luxurious
                villa surrounded by the world
              </p>
            </div>
            <div className="flex sm:flex-row">
              <button
                onClick={() => handleFilter("rent")}
                type="button"
                className="mr-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Rent
              </button>
              <button
                onClick={() => handleFilter("sale")}
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Sale
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {estates.estates
              .filter(
                (estate) => !statusFilter || estate.status === statusFilter
              )
              .map((estate) => (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  key={estate.id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                >
                  <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96 relative">
                    <img
                      src={estate.image}
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                    />
                    <p className="absolute right-2 bottom-2 bg-indigo-600 text-white font-medium text-sm px-2 rounded-lg">
                      {estate.status}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-base md:text-lg font-medium text-gray-900">
                      {estate.estate_title}
                    </h3>
                    <div className="flex gap-3">
                      <p className=" text-xs md:text-sm text-gray-500">
                        {estate.location.state
                          ? estate.location.state
                          : estate.location.country}
                      </p>
                      <p className="text-xs md:text-sm  text-gray-500">
                        Property ID: {estate.property_id}
                      </p>
                      <p className="text-xs md:text-sm  text-gray-500">
                        {" "}
                        {estate.segment_name}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm leading-tight text-gray-700">
                        {estate.sub_title}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col justify-end">
                      <p className="text-base font-medium text-gray-900">
                        {estate.price}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                          <BiArea />
                          <p className="text-sm italic text-gray-500">
                            {estate.area}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="bg-indigo-600 py-1 rounded-lg text-white font-medium px-3">
                        <Link to={`/properties/${estate.id}`}>
                          {" "}
                          View Property{" "}
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
