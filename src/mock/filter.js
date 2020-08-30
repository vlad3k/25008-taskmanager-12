import {isTaskExpired, isTaskRepeating, isTaskExpiringToday} from "../utils/task";

const filterAllTasks = (tasks) => tasks.filter((task) => !task.isArchive).length;
const filterOverdueTasks = (tasks) => tasks.filter((task) => !task.isArchive && isTaskExpired(task.dueDate)).length;
const filterTodayTasks = (tasks) => tasks.filter((task) => !task.isArchive && isTaskExpiringToday(task.dueDate)).length;
const filterFavoriteTasks = (tasks) => tasks.filter((task) => !task.isArchive && task.isFavorite).length;
const filterRepeatingTasks = (tasks) => tasks.filter((task) => !task.isArchive && isTaskRepeating(task.repeating)).length;
const filterArchiveTasks = (tasks) => tasks.filter((task) => task.isArchive).length;

const taskToFilterMap = {
  all: filterAllTasks,
  overdue: filterOverdueTasks,
  today: filterTodayTasks,
  favorites: filterFavoriteTasks,
  repeating: filterRepeatingTasks,
  archive: filterArchiveTasks,
};

export const generateFilter = (tasks) => {
  return Object.entries(taskToFilterMap).map(([filterName, countTasks]) => {
    return {
      name: filterName,
      count: countTasks(tasks),
    };
  });
};
