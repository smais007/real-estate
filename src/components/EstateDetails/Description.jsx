import { useLoaderData, useParams } from "react-router-dom";

const Description = () => {

  const estatesData = useLoaderData();
  const { id } = useParams();
  const estates = estatesData.estates;
  const estate = estates.find((estate) => estate.id === parseInt(id));

  return (
    <div className="  mt-10  border rounded-xl p-4">
      <div className="my-5">
        <h1 className="mb-4 text-xl font-medium">Property Description</h1>
        <p>
          {estate.description}
        </p>
      </div>
      <div>
        <h1 className="mb-4 text-xl font-medium">Property Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  justify-between   md:gap-36 ">
          <div className=" flex justify-between">
            <div>
              <p className="font-medium leading-[2rem]">Property ID</p>
              <p className="font-medium leading-[2rem]">Price</p>
              <p className="font-medium leading-[2rem]">Property Size</p>
              <p className="font-medium leading-[2rem]">Bathrooms</p>
              <p className="font-medium leading-[2rem]">Bedrooms</p>
            </div>
            <div className="text-right">
              <p className="leading-[2rem]">{estate.property_id}</p>
              <p className="leading-[2rem]">{estate.price}</p>
              <p className="leading-[2rem]">{estate.area}</p>
              <p className="leading-[2rem]">{estate.bedroom}</p>
              <p className="leading-[2rem]">{estate.bath}</p>
            </div>
          </div>
          <div className=" flex  justify-between">
            <div>
              <p className="font-medium leading-[2rem]">Garage</p>
              <p className="font-medium leading-[2rem]"> Garage Size</p>
              <p className="font-medium leading-[2rem]">Year Built</p>
              <p className="font-medium leading-[2rem]">Property Type</p>
              <p className="font-medium leading-[2rem]">Property Status</p>
            </div>
            <div className="text-right">
              <p className="leading-[2rem]">{estate.garage}</p>
              <p className="leading-[2rem]">{estate.garage_size}</p>
              <p className="leading-[2rem]">{estate.build_year}</p>
              <p className="leading-[2rem]">{estate.type}</p>
              <p className="leading-[2rem]">{estate.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
