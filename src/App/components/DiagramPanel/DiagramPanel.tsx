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

  const [approval, setApproval] = useState<GroupData | null>(null);
  const [urgently, setUrgently] = useState<GroupData | null>(null);
  const [plan, setPlan] = useState<GroupData | null>(null);
  const [recording, setRecording] = useState<GroupData | null>(null);
  const [claim, setClaim] = useState<GroupData | null>(null);
  const [defense, setDefense] = useState<GroupData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const [
          approvalData,
          urgentlyData,
          planData,
          recordingData,
          claimData,
          defenseData,
          taskData,
          requestData,
        ] = await Promise.all([
          Scripts.getGroupApproval(),
          Scripts.getGroupUrgently(),
          Scripts.getGroupPlan(),
          Scripts.getGroupRecording(),
          Scripts.getGroupClaim(),
          Scripts.getGroupDefense(),
          Scripts.getTaskData(),
          Scripts.getRequestData(),
        ]);

        setApproval(approvalData);
        setUrgently(urgentlyData);
        setPlan(planData);
        setRecording(recordingData);
        setClaim(claimData);
        setDefense(defenseData);
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
        <CircleDiagram
          title="Согласование"
          segments={toSegments(approval?.values || [])}
          sla={approval?.sla}
        />
        <CircleDiagram
          title="Экстренная"
          segments={toSegments(urgently?.values || [])}
          sla={urgently?.sla}
        />
        <CircleDiagram
          title="Плановая"
          segments={toSegments(plan?.values || [])}
          sla={plan?.sla}
        />
        <CircleDiagram
          title="Запись"
          segments={toSegments(recording?.values || [])}
          sla={recording?.sla}
        />
        <CircleDiagram
          title="Претензия"
          segments={toSegments(claim?.values || [])}
          sla={claim?.sla}
        />
        <CircleDiagram
          title="Защита +"
          segments={toSegments(defense?.values || [])}
          sla={defense?.sla}
        />
      </div>
    </div>
  );
}

export default DiagramPanel;
