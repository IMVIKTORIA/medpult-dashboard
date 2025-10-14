import React, { useEffect, useState } from "react";
import Button from "../../../UIKit/Button/Button";
import icons from "../../shared/icons";
import Scripts from "../../shared/utils/clientScripts";

/** Сворачиваемая панель */
function DashboardTaskPanelWrapper({ children, label = "", time, onReload }) {

  return (
    <div className="medpult-panel-mcp">
      <div className="medpult-panel-mcp__header" style={{ cursor: "text" }}>
        <span className="medpult-panel-mcp__label">{label}</span>
        <div className="medpult-panel-mcp__actions">
          <span className="medpult-panel-mcp__update">Обновлено в: {time}</span>
          <Button
            title="Обновить"
            icon={icons.Update}
            clickHandler={onReload}
            onInit={Scripts.waitCurrentProccess}
          />
        </div>
      </div>
      <div className="medpult-panel-mcp__content">{children}</div>
    </div>
  );
}

export default DashboardTaskPanelWrapper;
