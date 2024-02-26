export const parseEventList = (data, currentDate) => {
    try {

        // Calculate the start of the current week (Sunday)
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

        // Calculate the end of the current week (Saturday)
        const endOfWeek = new Date(currentDate);
        endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

        const resultObject = {};

        // Generate an array representing the days of the current week
        const currentWeekDays = [];
        for (let i = new Date(startOfWeek); i <= endOfWeek; i.setDate(i.getDate() + 1)) {
            currentWeekDays.push(new Date(i).toISOString().split('T')[0]);
        }

        // Initialize the resultObject with empty arrays for each day
        currentWeekDays.forEach(day => {
            resultObject[day] = [];
        });

        // Fill in the data for each task
        if (data.result)
            data.result.forEach(task => {
                const dueDate = task.dueDate.split('T')[0];

                if (resultObject[dueDate]) {
                    const height = task.title.length + task.description.length;

                    resultObject[dueDate].push({
                        day: dueDate,
                        height: height,
                        name: task.title,
                        item: {
                            _id: task._id,
                            title: task.title,
                            description: task.description,
                            type: task.type,
                            priority: task.priority,
                            dueDate: task.dueDate,
                            time: task.time,
                            completed: task.completed.toString()
                        }
                    });
                }
            });

        return resultObject;
    } catch (e) {
        console.log(e.message);
    }
}