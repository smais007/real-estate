/* eslint-disable react/prop-types */
import GoogleMapReact from "google-map-react";
import { googleAPIKey } from "../../services/googleAPIKey";
import { useLoaderData, useParams } from "react-router-dom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Address = () => {

  const estatesData = useLoaderData();
  const { id } = useParams();
  const estates = estatesData.estates;
  const estate = estates.find((estate) => estate.id === parseInt(id));

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="mt-10 border rounded-xl p-4">
      <div>
        <h1 className="mb-4 text-xl font-medium">Address</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  justify-between   md:gap-36 mb-4">
          <div className=" flex justify-between">
            <div>
              <p className="font-medium leading-[2rem]">Street</p>
              <p className="font-medium leading-[2rem]">City</p>
              <p className="font-medium leading-[2rem]">State</p>
            </div>
            <div className="text-right">
              <p className="leading-[2rem]">{estate.location.street}</p>
              <p className="leading-[2rem]">{estate.location.city}</p>
              <p className="leading-[2rem]">{estate.location.state}</p>
            </div>
          </div>
          <div className=" flex  justify-between">
            <div>
              <p className="font-medium leading-[2rem]">County</p>
              <p className="font-medium leading-[2rem]"> Zip Code</p>
            </div>
            <div className="text-right">
              <p className="leading-[2rem]">{estate.location.country}</p>
              <p className="leading-[2rem]">{estate.location.ZIP}</p>
            </div>
          </div>
        </div>

        {/* Goople maps */}
        <div>
          <div style={{ height: "400px", width: "100%", borderRadius:"1rem" }}>
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
