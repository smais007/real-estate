import Address from "./Address";
import Description from "./Description";
import Features from "./Features";
import OverView from "./OverView";
import ScheduleTour from "./ScheduleTour";

const Details = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex justify-between ">
        <div>
          <div>
            <h1 className="text-3xl">Equestrian Family Home</h1>
          </div>
          <div className="flex  flex-col md:flex-row">
            <div>
              <p>New York City, CA, USA</p>
            </div>
            <div className="flex gap-3">
              <p>for seal</p>
              <p>6 year ago</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-right">
            <h1 className="text-2xl">Rent Price $</h1>
            <p>$11.67/sq ft</p>
          </div>
        </div>
      </div>
      <div>
        <img className="h-1/2" src="/src/assets/images/h1.jpg" alt="" />
      </div>
      <div className="flex flex-col md:flex-row border gap-5">
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
