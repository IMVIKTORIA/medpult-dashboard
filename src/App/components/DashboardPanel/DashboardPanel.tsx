import React, { useEffect, useState } from "react";
import DiagramPanel from "../DiagramPanel/DiagramPanel";
import TaskPanel from "../TaskPanel/TaskPanel";
import Scripts from "../../shared/utils/clientScripts.ts";
import Loader from "../../../UIKit/Loader/Loader";

function DashboardPanel() {
  const [isInitializing, setIsInitializing] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  const reloadData = () => {
    setReloadKey((prev) => prev + 1);
  };

  // Автообновление каждые 5 минут
  useEffect(() => {
    const interval = setInterval(
      () => {
        setReloadKey((prev) => prev + 1);
      },
      5 * 60 * 1000
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Scripts.OnInit().then(() => setIsInitializing(false));
  }, []);
  return (
    <>
      {isInitializing && (
        <div className="medpult-work-table-loader">
          <Loader />
        </div>
      )}
      {!isInitializing && (
        <div className="dashboard-panel">
          <DiagramPanel key={reloadKey} />
          <TaskPanel reloadKey={reloadKey} onReload={reloadData} />
        </div>
      )}
    </>
  );
}

export default DashboardPanel;
