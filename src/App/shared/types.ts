export class DashboardListData {
  /** Группа */
  group?: string;
  /** В очереди */
  queue?: string[];
  /** Возвращена */
  returned?: string[];
  /** В работе */
  atWork?: string[];
  /** Контроль */
  control?: string[];
  /** Отложена */
  postpone?: string[];
  /** Выполнено */
  complete?: string[];
  /** Sla */
  sla?: string;
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
