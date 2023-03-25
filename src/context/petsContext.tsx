import { createContext, useEffect, useState } from "react";

type PetProps = {
  id: string;
  name: string;
  type: string;
  photo_url: string;
  age: string;
  energy: number;
  size: string;
  independence: string;
}

type PetsContextProps = {
  pets: PetProps[];
  filteredPets: PetProps[];
  filtered: boolean;
  setPets: React.Dispatch<React.SetStateAction<never[]>>;
  setFilteredPets: React.Dispatch<React.SetStateAction<PetProps[]>>;
  setFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PetsContext = createContext<PetsContextProps>({} as PetsContextProps);

const PetsContextProvider = (props: any) => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState<PetProps[]>(pets);
  const [filtered, setFiltered] = useState(false);

  return (
    <PetsContext.Provider value={{ pets, setPets, filteredPets, setFilteredPets, filtered, setFiltered }}>
      {props.children}
    </PetsContext.Provider>
  );
}

export default PetsContextProvider;