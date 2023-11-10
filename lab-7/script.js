/* Create a function that retrieves every type of bean from the counters data, stores it into an array, and returns the array. */
/*The array should only contain unique values. */

function getUniqueBeans(countersArray) {
    const uniqueBeans = [];
    countersArray.forEach(counter => {
        if (!uniqueBeans.includes(counter.bean)) {
            uniqueBeans.push(counter.bean);
        }
    });
    return uniqueBeans;
}

/* Create a function that sorts the counters data by the counters' names and returns the sorted array. */

function sortCountersByName(countersArray) {
    return countersArray.slice().sort((a, b) => a.name.localeCompare(b.name));
}

/* Create a function that filters the counters by bean type and returns the filtered array. */

function filterCountersByBean(countersArray, beanType) {
    return countersArray.filter(counter => counter.bean === beanType);
}

/* Create a function that returns the total number of beans counted by every counter in the provided counters array. Return the total number. */

function getTotalBeans(countersArray) {
    return countersArray.reduce((total, counter) => total + counter.count, 0);
}

/* Dynamically create an ordered list for every bean type containing each bean counter. 
In addition to the counter's name, the counter's count should be displayed. 
The total number of beans for each bean counted should also be displayed. */

function createBeanCountersList(countersArray) {
    const uniqueBeans = getUniqueBeans(countersArray);
    const beanListContainer = document.getElementById('beanCounterList');

    uniqueBeans.forEach(bean => {
        const beanCounters = filterCountersByBean(countersArray, bean);
        const sortedBeanCounters = sortCountersByName(beanCounters);

        const totalBeans = getTotalBeans(beanCounters);
        const listTitle = document.createElement('h2');
        listTitle.textContent = `${bean} - Total Count: ${totalBeans}`;
        beanListContainer.appendChild(listTitle);

        const list = document.createElement('ol');
        sortedBeanCounters.forEach(counter => {
            const listItem = document.createElement('li');
            listItem.textContent = `${counter.name} - ${counter.count}`;
            list.appendChild(listItem);
        });

        beanListContainer.appendChild(list);
    });
}

// Call the function to create and append the list after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => createBeanCountersList(counters));