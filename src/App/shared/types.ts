export class DashboardListData {
  /** Группа */
  group?: string;
  /** В очереди */
  queue?: number[];
  /** Возвращена */
  returned?: number[];
  /** В работе */
  atWork?: number[];
  /** Контроль */
  control?: number[];
  /** Отложена */
  postpone?: number;
  /** Выполнено */
  complete?: number;
  /** Sla */
  sla?: number;
  groupData?: DashboardListData[];

  constructor({
    group,
    queue,
    returned,
    atWork,
    control,
    postpone,
    complete,
    sla,
  }: DashboardListData) {
    this.group = group;
    this.queue = queue;
    this.returned = returned;
    this.atWork = atWork;
    this.control = control;
    this.postpone = postpone;
    this.complete = complete;
    this.sla = sla;
  }
}
type ProgressBarData = {
  label: string;
  percent: number;
  values: number[];
};
export type GroupData = {
  /** Идентификатор группы */
  groupId: string;
  /** Название группы */
  groupName: string;
  values: number[];
  sla: number;
};
export type GroupDataBar = {
  values: ProgressBarData[];
  sla: number;
  count?: number;
};