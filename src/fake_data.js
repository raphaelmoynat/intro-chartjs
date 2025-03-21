
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
    labels: ["Rent", "Groceries", "Utilities", "Elements", "BObo"],
    datasets: [
        {
            label: "Expenses",
            data: [3000, 5000, 4500, 6000, 6000],
            borderColor: "black",
            borderWidth: 1,
        }
    ]
}

export const revenusData = {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai"],
    datasets: [{
        label: "Revenus nets",
        data: [1500, 2800, 2300, 2500, 2800, 3000],
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
        data: [600, 130],
        backgroundColor:[
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 99, 132, 0.8)",
        ],
        hoverOffset: 4
    }]
}

export const userChartData = {
    labels: ["Utilisateurs convertis", "Utilisateurs passifs"],
    datasets: [{
        label: 'Pourcentage des utilisateurs convertis',
        data: [300, 130],
        backgroundColor:[
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 99, 132, 0.8)",
        ],
        hoverOffset: 4
    }]
}


export const evolutionUsersData = {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai"],
    datasets: [{
        label: "Evolution du nombre d'users convertis en fonction du temps",
        data: [120, 130, 145, 135, 160, 140],
        backgroundColor: ['rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',],
        borderWidth: 1
    }]
};

export const statsData = {
    ventes: {
        titre: "Revenus nets actuels",
        valeur: "425,670 €",
        evolution: "+12.5%",
        positif: true
    },
    clients: {
        titre: "Article le plus vendu",
        valeur: "Chaussures",
        evolution: "+8.3%",
        positif: true
    },
    conversion: {
        titre: "Utilisateurs convertis ce mois-ci",
        valeur: "82",
        evolution: "-0.5%",
        positif: false
    },
    panier: {
        titre: "Paniers validés ce mois-ci",
        valeur: "127",
        evolution: "+4.2%",
        positif: true
    }
};