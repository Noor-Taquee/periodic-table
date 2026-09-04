import type { ElementData, TableData } from "../../../../core/data";

import ModernElementCell from "../../../../components/ModernElementCell";

interface MainTableProps {
  data: TableData;
  onSelectElement: (s: ElementData) => void;
}

/**
 * Part of the periodic table, containing s, p & d blocks.
 */
export default function MainTable({ data, onSelectElement }: MainTableProps) {
  const mainElements = data.filter((element) => element.block !== "f");

  return (
    <div className="table-piece" id="main-table">
      {mainElements.map((element) => (
        <ModernElementCell
          key={element.symbol}
          element={element}
          onSelectElement={onSelectElement}
        />
      ))}
    </div>
  );
}
