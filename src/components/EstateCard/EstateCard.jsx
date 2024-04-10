import { useState, useContext } from "react";
import { BiBed, BiArea, BiBath } from "react-icons/bi";
import { EstateCardContext } from "../../contexts/EstateCardProvider";

export default function EstateCard() {
  const [statusFilter, setStatusFilter] = useState("");

  const handleFilter = (status) => {
    setStatusFilter(status);
  };

  const estateData = useContext(EstateCardContext);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="">Discover Popular Properties</h2>
        <div className="flex justify-between">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              ipsum?
            </p>
          </div>
          <div className="inline-flex gap-2">
            <button
              onClick={() => handleFilter("rent")}
              type="button"
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Rent
            </button>
            <button
              onClick={() => handleFilter("sale")}
              type="button"
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Sale
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {estateData
            .filter((estate) => !statusFilter || estate.status === statusFilter)
            .map((estate) => (
              <div
                key={estate.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                  <img
                    src={estate.image}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={estate.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {estate.estate_title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">{estate.location.state}</p>
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
                      {estate.bedrooms && (
                        <div className="flex gap-1">
                          <BiBed />
                          <p className="text-sm italic text-gray-500">
                            {estate.bedrooms}
                          </p>
                        </div>
                      )}

                      {estate.bathrooms && (
                        <div className="flex gap-1 items-center">
                          <BiBath />
                          <p className="text-sm italic text-gray-500">
                            {estate.bathrooms}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
