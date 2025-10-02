import { FetchData } from "../../../UIKit/CustomList/CustomListTypes";
import { DashboardListData, GroupData, GroupDataBar } from "../types";
import { generateGroupsMock, GroupMockData } from "./groupsGenerator";

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
    returned: [0, 0, 0],
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
    items: groupsBuffer
      .map(groupMockData => {
        const data = new DashboardListData(mockData);
        
        data.queue = [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random())];
        data.returned = [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random())];
        data.atWork = [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random())];
        data.control = [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random())];
        data.postpone = Math.floor(50*Math.random());
        data.complete = Math.floor(50*Math.random());
        data.sla = Math.floor(100*Math.random());

        data.group = groupMockData.groupName;
        data.groupData = mockGroupData;

        return {
          id: groupMockData.groupId,
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
    queue: [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random())],
    returned: [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random())],
    atWork: [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random())],
    control: [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random())],
    postpone: Math.floor(50*Math.random()),
    complete: Math.floor(50*Math.random()),
    sla: Math.floor(100*Math.random()),
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

async function getGroupsData(): Promise<GroupData[]> {
  await randomDelay();

  let groupsData: GroupData[] = [];

  for(const currentGroup of groupsBuffer) {
    const currentGroupData: GroupData = {
      groupId: currentGroup.groupId,
      groupName: currentGroup.groupName,
      sla: Math.floor(100*Math.random()),
      values: [Math.floor(100*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random())]
    }

    groupsData.push(currentGroupData)
  }

  return groupsData;
}

const groupsBuffer: GroupMockData[] = generateGroupsMock(9);
async function OnInit(): Promise<void> {
  await randomDelay();
}

export default {
  getTask,
  getTaskSum,

  getRequestData,
  getTaskData,

  OnInit,
  getGroupsData,
};
