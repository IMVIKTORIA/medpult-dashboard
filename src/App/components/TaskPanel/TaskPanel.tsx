import React, { useEffect, useState } from "react";
import DashboardTaskPanelWrapper from "../Panel/Panel";
import {
  ListColumnData,
  ItemData,
} from "../../../UIKit/CustomList/CustomListTypes";
import CustomListSync from "../../../UIKit/CustomList/CustomList";
import Scripts from "../../shared/utils/clientScripts";
import { DashboardListData } from "../../shared/types";

/** Дашборд */
function TaskPanel({
  reloadKey,
  onReload,
}: {
  reloadKey: number;
  onReload: () => Promise<void>;
}) {
  function getLastUpdateTime() {
    const date = Scripts.getLastUpdateDate();
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  
  const [lastUpdateTime, setLastUpdateTime] = useState<string>(getLastUpdateTime());
  
  // Функция для обновления данных
  const reloadData = async () => {
    await onReload();
    setLastUpdateTime(getLastUpdateTime());
  };

  /** Колонки списка */
  const columns = [
    new ListColumnData({
      name: "Группа",
      code: "group",
      fr: 3,
      isSortable: true,
    }),
    new ListColumnData({
      name: "В очереди",
      code: "queue",
      fr: 1,
      isSortable: true,
    }),
    new ListColumnData({
      name: "Возвращена",
      code: "returned",
      fr: 1,
      isSortable: true,
    }),
    new ListColumnData({
      name: "В работе",
      code: "atWork",
      fr: 1,
      isSortable: true,
    }),
    new ListColumnData({
      name: "Контроль",
      code: "control",
      fr: 1,
      isSortable: true,
    }),
    new ListColumnData({
      name: "Отложена",
      code: "postpone",
      fr: 1,
      isSortable: true,
    }),
    new ListColumnData({
      name: "Выполнено",
      code: "complete",
      fr: 1,
      isSortable: true,
    }),
    new ListColumnData({
      name: "sla",
      code: "sla",
      fr: 1,
      isSortable: true,
    }),
  ];

  const getDetailsLayout = ({
    rowData,
    onClickRowHandler,
  }: {
    rowData: DashboardListData;
    onClickRowHandler: () => void;
  }) => {
    if (!rowData.groupData || rowData.groupData.length === 0) return null;
    const getSubDataHandler = () => {
      return {
        items: rowData.groupData!.map((data, idx) => ({
          id: `${rowData.group}-${idx}`,
          data,
        })),
        hasMore: false,
      };
    };
    return (
      <div style={{ backgroundColor: "#F4F4F5" }}>
        <CustomListSync
          reloadKey={reloadKey}
          columnsSettings={columns}
          getDataHandler={getSubDataHandler}
          isScrollable={false}
          hideHeader={true}
        />
      </div>
    );
  };

  return (
    <div className="task-panel">
      <DashboardTaskPanelWrapper label={"Задачи"} time={lastUpdateTime} onReload={reloadData}>
        <CustomListSync
            reloadKey={reloadKey}
            columnsSettings={columns}
            getDataHandler={Scripts.getTask}
            isScrollable={false}
            getDetailsLayout={getDetailsLayout}
            hideHeader={false}
          />
      </DashboardTaskPanelWrapper>
      {/*Общая строка*/}
      <div className="total-list-row">
        <CustomListSync
          key={reloadKey}
          columnsSettings={columns}
          getDataHandler={Scripts.getTaskSum}
          isScrollable={false}
          hideHeader={true}
        />
      </div>
    </div>
  );
}

export default TaskPanel;
