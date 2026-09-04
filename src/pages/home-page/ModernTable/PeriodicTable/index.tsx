import "./style.css";
import "./colors.css";

import { useState, useEffect } from "react";
import {
  loadElement,
  type TableData,
  type ElementData,
} from "../../../../core/data";

import MainTable from "./MainTable";
import SecondTable from "./SecondTable";

interface PeriodicTableProps {
  onSelectElement: (element: ElementData | null) => void;
}

export function PeriodicTable({ onSelectElement }: PeriodicTableProps) {
  const [elements, setElements] = useState<TableData>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    loadElement().then((data) => {
      setElements(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  const data = elements as TableData;

  return (
    <div className="by-category" id="modern-periodic-table">
      <MainTable data={data} onSelectElement={onSelectElement} />
      <SecondTable data={data} onSelectElement={onSelectElement} />
    </div>
  );
}

export default PeriodicTable;
