import "./style.css";

import type { ElementData, TableData } from "../../../../../core/data";
import { ModernElementCell } from "../../../../../components/ModernElementCell";

interface SecondTableProps {
  data: TableData;
  onSelectElement: (element: ElementData) => void;
}

/**
 * Part of the periodic table, containing f block.
 */
export function SecondTable({ data, onSelectElement }: SecondTableProps) {
  const elements = data.filter((element) => element.block === "f");

  return (
    <div className="table-piece" id="second-table">
      {elements.map((element) => (
        <ModernElementCell
          key={element.symbol}
          element={element}
          onSelectElement={onSelectElement}
        />
      ))}
    </div>
  );
}

export default SecondTable;
