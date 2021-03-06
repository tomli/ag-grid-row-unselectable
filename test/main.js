var columnDefs = [{
    headerName: "Athlete",
    field: "athlete",
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: function(params) {
        return ageValid(params.node);
    }
}, {
    headerName: "Age",
    field: "age"
}, {
    headerName: "Country",
    field: "country"
}, {
    headerName: "Date",
    field: "date"
}, {
    headerName: "Sport",
    field: "sport"
}, {
    headerName: "Gold",
    field: "gold"
}, {
    headerName: "Silver",
    field: "silver"
}, {
    headerName: "Bronze",
    field: "bronze"
}, {
    headerName: "Total",
    field: "total"
}];

var gridOptions = {
    defaultColDef: {
        width: 100
    },
    enableColResize: true,
    // suppressRowClickSelection: true,
    rowSelection: 'multiple',
    columnDefs: columnDefs,
    isNodeSelectable: function (node) {
        return ageValid(node);
    },
    rowData: generateFakeData()
};

function ageValid(node) {
    return node.data.age >= 35;
}

function createRowData(uniqueIdentify) {
    return {
        "athlete": "John Smith" + uniqueIdentify,
        "age": 33 + uniqueIdentify,
        "country": "US",
        "date": new Date()
    };
}

function generateFakeData() {
    var rowData = [];
    numberOfRows = 5;
    for (var i = 0; i < numberOfRows; i++) {
        rowData.push(createRowData(i));
    }
    return rowData;
}

function onQuickFilterChanged(text) {
    gridOptions.api.setQuickFilter(text);
}

function onButtonClicked() {
    var selectedNodes = gridOptions.api.getSelectedNodes();
    var selectedRows = gridOptions.api.getSelectedRows();
    console.log(''+selectedNodes.length+' nodes selected.');
    console.log(''+selectedRows.length+' rows selected.');
}
// setup the grid
console.log('HELLO WORLD');
var gridDiv = document.querySelector('#myGrid');
new agGrid.Grid(gridDiv, gridOptions);
