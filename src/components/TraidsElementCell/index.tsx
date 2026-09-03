import type { TriadsElementData } from "../../pages/home-page/TriadsTable/data";

interface ElementCellProps {
  element: TriadsElementData;
}

export function TriadsElementCell({ element }: ElementCellProps) {
  return (
    <div className={`element-cell`}>
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

export default TriadsElementCell;
