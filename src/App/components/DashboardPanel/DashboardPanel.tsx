import React, { useEffect, useState } from "react";
import DiagramPanel from "../DiagramPanel/DiagramPanel";
import TaskPanel from "../TaskPanel/TaskPanel";

function DashboardPanel() {
  return (
    <div className="dashboard-panel">
      <DiagramPanel />
      <TaskPanel />
    </div>
  );
}

export default DashboardPanel;
