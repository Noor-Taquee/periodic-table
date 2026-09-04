export type OctaveElementData = {
  /**
   * Paired elements have symbols in the form `<Symbol>/<Symbol>`
   * @example Co/Ni
   */
  symbol: string;

  /**
   * Paired elements have names in the form `<name> & <name>`
   * @example Cobalt & Nickel
   */
  name: string;

  mass: number;

  /** Some elements are present in group of two, this flag is to identify them  */
  isSlotDouble?: true;
};

export type OctavesData = {
  musicalNotes: {
    western: ["do", "re", "mi", "fa", "sol", "la", "ti"];
    indian: ["sa", "re", "ga", "ma", "pa", "da", "ni"];
  };
  octaves: {
    noteIndex: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    elements: OctaveElementData[];
  }[];
};

export async function loadElements() {
  const response = await fetch(`${import.meta.env.BASE_URL}data/octaves.json`);
  const data: OctavesData = await response.json();
  return data;
}
