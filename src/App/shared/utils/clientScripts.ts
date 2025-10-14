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
function getTask(): FetchData<DashboardListData> {

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
    queue: [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random())],
    returned: [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random())],
    atWork: [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random())],
    control: [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random())],
    postpone: Math.floor(50*Math.random()),
    complete: Math.floor(50*Math.random()),
    sla: Math.floor(100*Math.random()),
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

function getTaskSum(): FetchData<DashboardListData> {

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

function getRequestData(): GroupDataBar {
  return {
    count: Math.floor(360 * Math.random()),
    sla: Math.floor(91 * Math.random()),
    values: [
      { label: "Новое", percent: Math.floor(45 * Math.random()), values: [Math.floor(12 * Math.random()), Math.floor(18 * Math.random()), Math.floor(15 * Math.random())] },
      { label: "В работе", percent: Math.floor(12 * Math.random()), values: [Math.floor(12 * Math.random()), Math.floor(18 * Math.random()), Math.floor(15 * Math.random())] },
      { label: "Открыто", percent: Math.floor(34 * Math.random()), values: [Math.floor(12 * Math.random()), Math.floor(18 * Math.random()), Math.floor(15 * Math.random())] },
    ],
  };
}

function getTaskData(): GroupDataBar {
  return {
    count: Math.floor(2680 * Math.random()),
    sla: Math.floor(80 * Math.random()),
    values: [
      { label: "В очереди", percent: Math.floor(45 * Math.random()), values: [Math.floor(12 * Math.random()), Math.floor(0 * Math.random()), Math.floor(15 * Math.random())] },
      { label: "Возвращена", percent: Math.floor(12 * Math.random()), values: [Math.floor(12 * Math.random()), Math.floor(18 * Math.random()), Math.floor(0 * Math.random())] },
      { label: "В работе", percent: Math.floor(34 * Math.random()), values: [Math.floor(12 * Math.random()), Math.floor(0 * Math.random()), Math.floor(0 * Math.random())] },
      { label: "Контроль", percent: Math.floor(40 * Math.random()), values: [Math.floor(12 * Math.random()), Math.floor(18 * Math.random()), Math.floor(15 * Math.random())] },
      { label: "Отложена", percent: Math.floor(21 * Math.random()), values: [Math.floor(12 * Math.random()), Math.floor(18 * Math.random()), Math.floor(15 * Math.random())] },
    ],
  };
}

function getGroupsData(): GroupData[] {

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
  await updateDashboardData();
}

/** Запустить процесс обновления данных Дашборда */
async function runUpdateProcessData() {
  const delay = 30 * 1000;

  await new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

/** Обновить данные дашборда */
async function updateDashboardData() {
  await randomDelay();
}

/** Получение последней даты обновления */
function getLastUpdateDate() {
 return new Date()
}

export default {
  getTask,
  getTaskSum,

  getRequestData,
  getTaskData,

  OnInit,
  getGroupsData,

  runUpdateProcessData,
  updateDashboardData,
  getLastUpdateDate
};
