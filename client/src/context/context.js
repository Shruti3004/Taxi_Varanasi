import React, { useState } from "react";
import { DataPlaces } from "../data/top-10-places-in-varanasi";
import { DataTaxiService } from "../data/taxi-and-cab-booking-service-in-varanasi";
import { DataKashiVishwanath } from "../data/kashi-vishwanath-darshan";
import { DataCarHire } from "../data/car-hire-in-varanasi";
import { DataAbout } from "../data/about-taxi-in-varanasi";
import { DataHome } from "../data/home";

export const DetailsContext = React.createContext();

export function DetailsProvider({ children }) {
  const initialState = {
    places: DataPlaces,
    taxiService: DataTaxiService,
    kashiVishwanath: DataKashiVishwanath,
    carHire: DataCarHire,
    about: DataAbout,
    home: DataHome,
  };
  const [state, setState] = useState(initialState);
  return (
    <DetailsContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
}
