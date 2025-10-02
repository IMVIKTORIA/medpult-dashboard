import React, { useEffect, useState } from "react";
import CardDiagram from "./CardDiagram/CardDiagram";
import CircleDiagram from "./CircleDiagram/CircleDiagram";
import Scripts from "../../shared/utils/clientScripts";
import { GroupData, GroupDataBar } from "../../shared/types";
import Loader from "../../../UIKit/Loader/Loader";

const COLORS = ["#50DC6B", "#FF4545", "#FF9F45"];

function DiagramPanel() {
  const [isLoading, setIsLoading] = useState(true);

  const [request, setRequest] = useState<GroupDataBar | null>(null);
  const [task, setTask] = useState<GroupDataBar | null>(null);
  const [groupsData, setGroupsData] = useState<GroupData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const [
          groupsData,
          taskData,
          requestData,
        ] = await Promise.all([
          Scripts.getGroupsData(),
          Scripts.getTaskData(),
          Scripts.getRequestData(),
        ]);

        setGroupsData(groupsData);
        setTask(taskData);
        setRequest(requestData);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const toSegments = (values: number[]) => {
    const reordered = [values[0], values[2], values[1]];
    return reordered.map((value, i) => ({
      value,
      color: COLORS[i] || "#ccc",
    }));
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="diagram-panel">
      <div className="diagram-panel__cards">
        <CardDiagram
          title="Обращения"
          value={request?.count}
          sla={request?.sla}
          progressValues={request?.values}
        />
        <CardDiagram
          title="Задачи"
          value={task?.count}
          sla={task?.sla}
          progressValues={task?.values}
        />
      </div>
      <div className="diagram-panel__circles">
        {
          groupsData.map(groupData =>
            <CircleDiagram
              title={groupData.groupName}
              segments={toSegments(groupData.values || [])}
              sla={groupData.sla}
              key={groupData.groupId}
            />
          )
        }
      </div>
    </div>
  );
}

export default DiagramPanel;
