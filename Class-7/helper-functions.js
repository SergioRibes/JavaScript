function monitorCount(rows, columns) {
    return rows * columns
}

function costOfMonitors(rows, columns, cost) {
    return monitorCount(rows, columns) * cost;
}
let totalCost = costOfMonitors(5, 4, 200);
console.log(totalCost);

