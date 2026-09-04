import { useState } from "react";
import type { InnerRoute } from "../../../utils/router";

import type { ElementData } from "../../../core/data";

import InfoPanel from "./InfoPanel";
import PeriodicTable from "./PeriodicTable";

interface ModernTableProps {
  route?: InnerRoute;
}

export default function ModernTable({ route }: ModernTableProps) {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(
    null
  );

  if (route) {
    // TODO: implement element logic
  }

  return (
    <div className="element-table" id="modern-table">
      <PeriodicTable onSelectElement={setSelectedElement} />
      {selectedElement && <InfoPanel element={selectedElement} />}
    </div>
  );
}
