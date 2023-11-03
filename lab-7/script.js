/* Create a function that retrieves every type of bean from the counters data, stores it into an array, and returns the array. */
/*The array should only contain unique values. */

function getBeanTypes() {
    let beanTypes = [];
    counters.forEach(counter => {
        if (!beanTypes.includes(counter.bean)) {
            beanTypes.push(counter.bean);
        }
    });
    return beanTypes;
}

/* Create a function that sorts the counters data by the counters' names and returns the sorted array. */

function sortCountersByName() {
    return counters.sort((a, b) => a.name.localeCompare(b.name));
}

/* Create a function that filters the counters by bean type and returns the filtered array. */

function filterCountersByBean(bean) {
    return counters.filter(counter => counter.bean === bean);
}

/* Create a function that returns the total number of beans counted by every counter in the provided counters array. Return the total number. */

function getTotalCount() {
    let totalCount = 0;
    counters.forEach(counter => {
        totalCount += counter.count;
    });
    return totalCount;
}

/* Dynamically create an ordered list for every bean type containing each bean counter. 
In addition to the counter's name, the counter's count should be displayed. 
The total number of beans for each bean counted should also be displayed. */

function createBeanList() {
    let beanTypes = getBeanTypes();
    let beanList = document.getElementById("beanList");
    beanTypes.forEach(bean => {
        let beanListItem = document.createElement("li");
        beanListItem.textContent = bean;
        beanListItem.id = bean;
        beanList.appendChild(beanListItem);
        let beanCounters = filterCountersByBean(bean);
        beanCounters.forEach(counter => {
            let counterListItem = document.createElement("li");
            counterListItem.textContent = counter.name + ": " + counter.count;
            beanListItem.appendChild(counterListItem);
        });
        let totalCount = getTotalCount();
        let totalListItem = document.createElement("li");
        totalListItem.textContent = "Total: " + totalCount;
        beanListItem.appendChild(totalListItem);
    });
}