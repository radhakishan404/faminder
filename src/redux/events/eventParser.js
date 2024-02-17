export const parseEventList = (data) => {
    try {

        const sortedArray = data.result.sort((a, b) => {
            const priorityOrder = {
                'High': 1,
                'Medium': 2,
                'Low': 3,
            };

            const priorityComparison = priorityOrder[a.priority] - priorityOrder[b.priority];

            if (priorityComparison !== 0) {
                return priorityComparison;
            }

            const [hoursa, minutesa] = a?.time.split(':');
            const Adate = new Date(2000, 0, 1, hoursa, minutesa);

            const [hoursb, minutesb] = b?.time.split(':');
            const Bdate = new Date(2000, 0, 1, hoursb, minutesb);

            return new Date(Adate) - new Date(Bdate);
        });

        // Group items by priority
        const groupedArray = sortedArray.reduce((result, item) => {
            const priorityTitle = item.priority;
            const group = result.find(group => group.title === priorityTitle);

            let payloadToPush = {
                _id: item._id,
                title: item.title,
                description: item.description,
                type: item.type,
                priority: item.priority,
                dueDate: item.dueDate,
                time: item.time,
                completed: item.completed
            }

            if (group) {
                group.items.push(payloadToPush);
            } else {
                result.push({ title: priorityTitle, items: [payloadToPush] });
            }

            return result;
        }, []);

        data.result = groupedArray
        return data;
    } catch (e) {
        console.log(e.message);
    }
}