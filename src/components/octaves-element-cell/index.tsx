import type { OctaveElementData } from "../../pages/home-page/octaves/data";

interface ElementCellProps {
  element: OctaveElementData;
  /**
   * Musical note
   */
  note: number;
}

export function OctavesElementCell({ element, note }: ElementCellProps) {
  return (
    <div className={`element-cell note-${note}`}>
      <div className="element-info-div">
        <p className="mass-number">{Number(element.mass).toFixed(1)}</p>
      </div>
      <div className="element-name-div">
        <p className="element-symbol">{element.symbol}</p>
        <p className="element-name">{element.name}</p>
      </div>
    </div>
  );
}

export default OctavesElementCell;
