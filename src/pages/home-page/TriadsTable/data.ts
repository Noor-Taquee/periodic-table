export type TriadsElementData = {
  symbol: string;
  name: string;
  mass: number;
};

export type TriadsData = {
  triads: {
    name: string;
    elements: TriadsElementData[];
  }[];
};

export async function loadElements() {
  const response = await fetch(`${import.meta.env.BASE_URL}data/triads.json`);
  const data: TriadsData = await response.json();
  return data;
}
