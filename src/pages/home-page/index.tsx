import "./style.css";

import { useEffect, useState } from "react";
import { changeHash, type InnerRoute } from "../../utils/router";

import ToggleButton from "../../components/ToggleButton";
import OptionButton from "../../components/OptionButton";

import ModernTable from "./modern-table";
import TriadsTable from "./TriadsTable";
import OctavesTable from "./octaves";

const routes = ["modern", "mandeleevs", "triads", "octaves"];

interface HomePageProps {
  route: InnerRoute;
}

export function HomePage({ route }: HomePageProps) {
  const [dropdownOpen, setDropdown] = useState(false);

  const [location, attribute] = route;

  const panel = location[0] || "modern";

  const innerRoute: InnerRoute = [location.slice(1), attribute];

  useEffect(() => {
    const panel = location[0] || "";

    if (!routes.includes(panel)) {
      changeHash("home/modern");
      return;
    }
  }, [location]);

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
                  window.location.hash = "home/modern";
                  setDropdown(false);
                }}
              />
              <OptionButton
                text="Octaves"
                onClick={() => {
                  window.location.hash = "home/octaves";
                  setDropdown(false);
                }}
              />
              <OptionButton
                text="Triads"
                onClick={() => {
                  window.location.hash = "home/triads";
                  setDropdown(false);
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="panel-content">
        {panel == "modern" && <ModernTable route={innerRoute} />}
        {panel == "triads" && <TriadsTable />}
        {panel == "octaves" && <OctavesTable />}
      </div>
    </div>
  );
}

export default HomePage;
