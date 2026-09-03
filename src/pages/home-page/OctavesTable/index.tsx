import "./style.css";
import "./colors.css";

import { useEffect, useState } from "react";
import { loadElements, type OctavesData } from "./data";

import OctavesElementCell from "../../../components/OctavesElementCell";

export function OctavesTable() {
  const [data, setData] = useState<OctavesData | null>(null);

  useEffect(() => {
    loadElements().then((data) => setData(data));
  }, []);

  return (
    <div className="element-table" id="octaves-table">
      {data &&
        data.octaves.map((octave, octaveNo) => (
          <div className="octaves-group" key={`octave-group-${octaveNo + 1}`}>
            {octave.elements.map((element, elementNo) => (
              <OctavesElementCell
                key={`octave-group-${elementNo + 1}`}
                element={element}
                note={octaveNo + 1}
              />
            ))}
          </div>
        ))}
    </div>
  );
}

export default OctavesTable;
