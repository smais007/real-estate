/* eslint-disable react/prop-types */
import GoogleMapReact from "google-map-react";
import { googleAPIKey } from "../../services/googleAPIKey";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Address = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="  mt-10 ">
      <div className="my-5">
        <h1 className="mb-4 text-xl font-medium">Property Description</h1>
      </div>
      <div>
        <h1 className="mb-4 text-xl font-medium">Address</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  justify-between   gap-36 ">
          <div className=" flex justify-between">
            <div>
              <p className="font-medium leading-[2rem]">Street</p>
              <p className="font-medium leading-[2rem]">City</p>
              <p className="font-medium leading-[2rem]">State</p>
            </div>
            <div className="text-right">
              <p className="leading-[2rem]">LTR40</p>
              <p className="leading-[2rem]">$494949</p>
              <p className="leading-[2rem]">1500 Sq Ft</p>
            </div>
          </div>
          <div className=" flex  justify-between">
            <div>
              <p className="font-medium leading-[2rem]">County</p>
              <p className="font-medium leading-[2rem]"> Zip Code</p>
            </div>
            <div className="text-right">
              <p className="leading-[2rem]">2</p>
              <p className="leading-[2rem]">200 SqFt</p>
            </div>
          </div>
        </div>
        <div>
          <div style={{ height: "400px", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: googleAPIKey }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
