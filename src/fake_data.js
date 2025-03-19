
export const topProductsData = {
    labels: ["Smartphone", "Laptop", "Smart Watch", "Tablet", "Camera"],
    datasets: [{
        label: "Meilleures ventes",
        data: [352, 298, 267, 243, 218],
        backgroundColor: ['rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',],
        borderWidth: 1
    }]
};

export const barChartData = {
    labels: ["Rent", "Groceries", "Utilities", "Elements"],
    datasets: [
        {
            label: "Expenses",
            data: [3000, 5000, 4500, 6000],
            borderColor: "black",
            borderWidth: 1,
        }
    ]
}

export const revenusData = {
    labels: ["Janvier", "Février", "Mars", "Avril"],
    datasets: [{
        label: "Revenus nets",
        data: [1500, 2800, 2300, 2500, 2800],
        backgroundColor: ['rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',],
        borderWidth: 1
    }]
};

export const cartChartData = {
    labels: ["Paniers validés", "Paniers abandonnés"],
    datasets: [{
        label: 'Statut des paniers',
        data: [370, 130],
        backgroundColor:[
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 99, 132, 0.8)",
        ],
        hoverOffset: 4
    }]
}