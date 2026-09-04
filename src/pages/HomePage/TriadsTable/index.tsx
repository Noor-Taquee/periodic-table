import "./style.css";
import "./colors.css";

import { useEffect, useState } from "react";
import { type TriadsData, loadElements } from "./data";

import TriadsElementCell from "../../../components/TraidsElementCell";

export default function TriadsTable() {
  const [elements, setElements] = useState<TriadsData | null>(null);

  useEffect(() => {
    loadElements().then((data) => setElements(data));
  }, []);

  return (
    <div className="element-table" id="triads-table">
      {elements &&
        elements.triads.map((group, groupNo) => (
          <div
            key={groupNo}
            className={`triads-group ${group.name.toLowerCase().replaceAll(" ", "-")}`}
          >
            <p className="triads-group-title">{group.name}</p>
            <div className="triads-group-elements">
              {group.elements.map((element, elementNo) => (
                <TriadsElementCell
                  key={`triads-${groupNo}-${elementNo}`}
                  element={element}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
