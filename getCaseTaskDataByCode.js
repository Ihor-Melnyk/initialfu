var caseTask = EdocsApi.getCaseTaskDataByCode("EatPIZZA");
// caseTask.executionState: 'string', - Стан опрацювання завдання:
//         'draft'(Проект),
//         'inProgress'(Опрацьовується),
// caseTask.state: 'string', - Стан виконання завдання: 'draft'(Проект),
//         'assigned'(Призначено),
//         'inProgress'(Взято в роботу),
//         'completed'(Виконано),
//         'rejected'(Відхилено),
//         'delegated'(Делеговано)
if (caseTask.state == "assigned" || caseTask.state == "inProgress" || caseTask.state == "completed") {
}
