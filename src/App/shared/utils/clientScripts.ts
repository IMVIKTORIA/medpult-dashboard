import { FetchData } from "../../../UIKit/CustomList/CustomListTypes";
import { DashboardListData, GroupData, GroupDataBar } from "../types";

/** Заглушка ожидания ответа сервера */
function randomDelay() {
  const delay = Math.random() * 1000;
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

/** Получение списка задач */
async function getTask(): Promise<FetchData<DashboardListData>> {
  await randomDelay();

  const mockData: DashboardListData = {
    group: "Согласование",
    queue: [21, 3, 0],
    returned: [1, 0, 0],
    atWork: [13, 0, 1],
    control: [35, 7, 2],
    postpone: 21,
    complete: 104,
    sla: 91,
  };

  const mockGroupItem = new DashboardListData({
    group: "Иванов Иван Иванович",
    queue: [21, 3, 0],
    returned: [1, 0, 0],
    atWork: [13, 4, 1],
    control: [35, 7, 2],
    postpone: 21,
    complete: 104,
    sla: 75,
  });

  const mockGroupData = Array(2).fill(mockGroupItem);

  return {
    items: Array(6)
      .fill(0)
      .map((_, index) => {
        const data = new DashboardListData(mockData);
        data.groupData = mockGroupData;
        return {
          id: String(index),
          data,
        };
      }),
    hasMore: false,
  };
}

async function getTaskSum(): Promise<FetchData<DashboardListData>> {
  await randomDelay();

  const sumData: DashboardListData = {
    group: "Итого:",
    queue: [21, 3, 0],
    returned: [1, 0, 0],
    atWork: [13, 4, 1],
    control: [35, 7, 2],
    postpone: 21,
    complete: 104,
    sla: 30,
  };

  return {
    items: [{ id: "sum", data: sumData }],
    hasMore: false,
  };
}

async function getRequestData(): Promise<GroupDataBar> {
  await randomDelay();
  return {
    count: 360,
    sla: 91,
    values: [
      { label: "Новое", percent: 45, values: [12, 18, 15] },
      { label: "В работе", percent: 12, values: [12, 18, 15] },
      { label: "Открыто", percent: 34, values: [12, 18, 15] },
    ],
  };
}

async function getTaskData(): Promise<GroupDataBar> {
  await randomDelay();
  return {
    count: 2680,
    sla: 80,
    values: [
      { label: "В очереди", percent: 45, values: [12, 0, 15] },
      { label: "Возвращена", percent: 12, values: [12, 18, 0] },
      { label: "В работе", percent: 34, values: [12, 0, 0] },
      { label: "Контроль", percent: 40, values: [12, 18, 15] },
      { label: "Отложена", percent: 21, values: [12, 18, 15] },
    ],
  };
}

async function getGroupApproval(): Promise<GroupData> {
  await randomDelay();
  return {
    values: [25, 7, 4],
    sla: 30,
  };
}
async function getGroupUrgently(): Promise<GroupData> {
  await randomDelay();
  return {
    values: [35, 3, 2],
    sla: 86,
  };
}
async function getGroupPlan(): Promise<GroupData> {
  await randomDelay();
  return {
    values: [45, 7, 4],
    sla: 91,
  };
}
async function getGroupRecording(): Promise<GroupData> {
  await randomDelay();
  return {
    values: [15, 4, 7],
    sla: 30,
  };
}

async function getGroupClaim(): Promise<GroupData> {
  await randomDelay();
  return {
    values: [25, 15, 3],
    sla: 15,
  };
}

async function getGroupDefense(): Promise<GroupData> {
  await randomDelay();
  return {
    values: [25, 7, 14],
    sla: 73,
  };
}

async function OnInit(): Promise<void> {
  await randomDelay();
}

export default {
  getTask,
  getTaskSum,

  getRequestData,
  getTaskData,

  getGroupApproval,
  getGroupUrgently,
  getGroupPlan,
  getGroupRecording,
  getGroupClaim,
  getGroupDefense,

  OnInit,
};
