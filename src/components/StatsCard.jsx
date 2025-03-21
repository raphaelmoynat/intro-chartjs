import React from 'react';

export const StatsCard = ({ stats }) => {
    return (
        <div className="stats-container bg-light p-3 h-100">
            <div className="row g-3">
                {Object.entries(stats).map(([key, stat]) => (
                    <div className="col-md-6" key={key}>
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <h6 className="card-subtitle mb-2 text-muted">{stat.titre}</h6>
                                <h3 className="card-title">{stat.valeur}</h3>
                                <span className={`badge ${stat.positif ? 'bg-success' : 'bg-danger'}`}>
                  {stat.evolution}
                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};