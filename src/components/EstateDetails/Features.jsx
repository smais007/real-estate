import { useLoaderData, useParams } from "react-router-dom";

const Features = () => {
  const estatesData = useLoaderData();
  const { id } = useParams();
  const estates = estatesData.estates;
  const estate = estates.find((estate) => estate.id === parseInt(id));

  return (
    <div className="my-10  border rounded-xl p-4">
      <h1 className="text-xl mb-4 font-medium"> Features & Amenities</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 list-disc list-inside leading-[2rem] ">
        {
          estate.facilities.map((facility, idx) =>(
            <li key={idx}>{facility}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Features;
