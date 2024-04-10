const Description = () => {
  return (
    <div className="  mt-10 ">
      <div className="my-5">
        <h1 className="mb-4 text-xl font-medium">Property Description</h1>
        <p>
          This 3-bed with a loft, 2-bath home in the gated community of The
          Hideout has it all. From the open floor plan to the abundance of light
          from the windows, this home is perfect for entertaining. The living
          room and dining room have vaulted ceilings and a beautiful fireplace.
          You will love spending time on the deck taking in the beautiful views.
          In the kitchen, you&apos;ll find stainless steel appliances and a tile
          backsplash, as well as a breakfast bar.
        </p>
      </div>
      <div>
        <h1 className="mb-4 text-xl font-medium">Property Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  justify-between   gap-36 ">
          <div className=" flex justify-between">
            <div>
              <p className="font-medium leading-[2rem]">Property ID</p>
              <p className="font-medium leading-[2rem]">Price</p>
              <p className="font-medium leading-[2rem]">Property Size</p>
              <p className="font-medium leading-[2rem]">Bathrooms</p>
              <p className="font-medium leading-[2rem]">Bedrooms</p>
            </div>
            <div className="text-right">
              <p className="leading-[2rem]">LTR40</p>
              <p className="leading-[2rem]">$494949</p>
              <p className="leading-[2rem]">1500 Sq Ft</p>
              <p className="leading-[2rem]">3</p>
              <p className="leading-[2rem]">2</p>
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
              <p className="leading-[2rem]">2</p>
              <p className="leading-[2rem]">200 SqFt</p>
              <p className="leading-[2rem]">2022</p>
              <p className="leading-[2rem]">Apartment</p>
              <p className="leading-[2rem]">For Sale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
