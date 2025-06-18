import { FetchData } from "../../../UIKit/CustomList/CustomListTypes";
import { DashboardListData } from "../types";

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
    queue: ["21", "3", "0"],
    returned: ["1", "0", "0"],
    atWork: ["13", "0", "1"],
    control: ["35", "7", "2"],
    postpone: ["21", "2", "0"],
    complete: ["104", "10", "1"],
    sla: "91%",
  };

  const mockGroupItem = new DashboardListData({
    group: "Иванов Иван Иванович",
    queue: ["21", "3", "0"],
    returned: ["1", "0", "0"],
    atWork: ["13", "4", "1"],
    control: ["35", "7", "2"],
    postpone: ["21", "2", "0"],
    complete: ["104", "10", "1"],
    sla: "75%",
  });

  const mockGroupData = Array(2).fill(mockGroupItem);

  return {
    items: Array(10)
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
    queue: ["21", "3", "0"],
    returned: ["1", "0", "0"],
    atWork: ["13", "4", "1"],
    control: ["35", "7", "2"],
    postpone: ["21", "2", "0"],
    complete: ["104", "10", "1"],
    sla: "30%",
  };

  return {
    items: [{ id: "sum", data: sumData }],
    hasMore: false,
  };
}

export default {
  getTask,
  getTaskSum,
};
