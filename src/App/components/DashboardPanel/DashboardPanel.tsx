import React, { useEffect, useState } from "react";
import DiagramPanel from "../DiagramPanel/DiagramPanel";
import TaskPanel from "../TaskPanel/TaskPanel";
import Scripts from "../../shared/utils/clientScripts.ts";
import Loader from "../../../UIKit/Loader/Loader";

function DashboardPanel() {
  const [isInitializing, setIsInitializing] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  /** Легкая перезагрузка без запуска процесса */
  const handleLighReloading = async () =>  {
    await Scripts.updateDashboardData();
    setReloadKey((prev) => prev + 1);
  }

  /** Долгая перезагрузка с запуском процесса */
  const handleReloadClick = async () => {
    // При нажатии кнопки запускать процесс обновления данных и получать после процесса обновленные данные
    await Scripts.runUpdateProcessData();

    await handleLighReloading()
  };

  // Автоматическое обновление каждую минуту без запуска процесса
  useEffect(() => {
    const interval = setInterval(
      () => handleLighReloading(),
      60 * 1000
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
          <DiagramPanel reloadKey={reloadKey} />
          <TaskPanel reloadKey={reloadKey} onReload={handleReloadClick} />
        </div>
      )}
    </>
  );
}

export default DashboardPanel;
