import "./style.css";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ToggleButton from "../../components/ToggleButton";
import OptionButton from "../../components/OptionButton";
import ModernTable from "./ModernTable";
import TriadsTable from "./TriadsTable";
import OctavesTable from "./OctavesTable";

export default function HomePage() {
  const [dropdownOpen, setDropdown] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const pathParts = location.pathname.split("/").filter(Boolean);
  const panel = pathParts[1] || "modern";

  return (
    <div id="home-page" className="app-panel">
      <div className="panel-bar">
        <div className="panel-name-div">
          <h1 className="panel-names">
            {panel == "modern" && "Modern Periodic Table"}
            {panel == "triads" && "Döbereiner's Triads"}
            {panel == "octaves" && "Newland's Octaves"}
          </h1>
          <ToggleButton
            title="Change table"
            icon="arrows-left-right"
            variant="bold"
            onClick={() => setDropdown((prev) => !prev)}
          />
          {dropdownOpen && (
            <div className="table-selector-dropdown">
              <OptionButton
                text="Modern"
                onClick={() => {
                  navigate("/home/modern");
                  setDropdown(false);
                }}
              />
              <OptionButton
                text="Octaves"
                onClick={() => {
                  navigate("/home/octaves");
                  setDropdown(false);
                }}
              />
              <OptionButton
                text="Triads"
                onClick={() => {
                  navigate("/home/triads");
                  setDropdown(false);
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="panel-content">
        {panel == "modern" && <ModernTable />}
        {panel == "triads" && <TriadsTable />}
        {panel == "octaves" && <OctavesTable />}
      </div>
    </div>
  );
}
