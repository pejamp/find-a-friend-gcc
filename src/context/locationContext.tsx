import { createContext, useEffect, useState } from "react";

type StateProps = {
  id: number;
  nome: string;
  sigla: string;
}

type CityProps = {
  code: string;
  name: string;
}

type LocationContextProps = {
  states: StateProps[];
  cities: CityProps[];
  selectedCity: string;
  selectedState: string;
  setCities: React.Dispatch<React.SetStateAction<never[]>>;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  setSelectedState: React.Dispatch<React.SetStateAction<string>>;
}

export const LocationContext = createContext<LocationContextProps>({} as LocationContextProps);

const LocationContextProvider = (props: any) => {
  const apiURL = "http://localhost:3333";
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');

  async function getStatesFromAPI() {
    const response = await fetch(`${apiURL}/location/states`);
    const data = await response.json();
    setStates(data.states);
  }

  useEffect(() => {
    getStatesFromAPI();
  }, []);

  return (
    <LocationContext.Provider value={{ states, cities, setCities, selectedCity, setSelectedCity, setSelectedState, selectedState }}>
      {props.children}
    </LocationContext.Provider>
  );
}

export default LocationContextProvider;