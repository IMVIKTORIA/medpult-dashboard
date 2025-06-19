import React, { useEffect, useState } from "react";
import Panel from "../Panel/Panel";
import {
  ListColumnData,
  ItemData,
} from "../../../UIKit/CustomList/CustomListTypes";
import CustomList from "../../../UIKit/CustomList/CustomList";
import Scripts from "../../shared/utils/clientScripts";
import { DashboardListData } from "../../shared/types";

/** Дашборд */
function TaskPanel() {
  const [reloadKey, setReloadKey] = useState(0);
  const [lastUpdateTime, setLastUpdateTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  // Функция для обновления данных
  const reloadData = () => {
    setReloadKey((prev) => prev + 1);
    setLastUpdateTime(
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };
  // Автообновление каждые 5 минут
  useEffect(() => {
    const interval = setInterval(
      () => {
        reloadData();
      },
      5 * 60 * 1000
    );
    return () => clearInterval(interval);
  }, []);

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
    const getSubDataHandler = async () => {
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
        <CustomList
          key={reloadKey}
          columnsSettings={columns}
          getDataHandler={getSubDataHandler}
          isScrollable={false}
          hideHeader={true}
        />
      </div>
    );
  };

  return (
    <div>
      <Panel label={"Задачи"} time={lastUpdateTime} onReload={reloadData}>
        <div style={{ padding: "0" }}>
          <CustomList
            key={reloadKey}
            columnsSettings={columns}
            getDataHandler={Scripts.getTask}
            isScrollable={false}
            getDetailsLayout={getDetailsLayout}
            hideHeader={false}
          />
        </div>
      </Panel>
      {/*Общая строка*/}
      <div className="total-list-row">
        <CustomList
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
