import React, { useEffect, useState } from "react";

function CardDiagram({ title, value, sla, progressValues }) {
  const getSlaColor = () => {
    if (sla === undefined) return "";
    if (sla > 90) return "green";
    if (sla >= 70) return "orange";
    return "red";
  };

  return (
    <div className="card-diagram">
      <span className="card-diagram__title">{title}</span>
      <div className="card-diagram__content">
        <div className="card-diagram__bar">
          {progressValues.map(({ label, percent, values }, i) => (
            <div key={i} className="card-diagram__bar__tooltip">
              <div className="card-diagram__bar__tooltip__text">
                <span className="card-diagram__bar__tooltip__text__title">
                  {label}
                </span>
                <span className="card-diagram__bar__tooltip__text__values">
                  {values?.map((v, idx) => {
                    if (v === 0) return null;
                    let colorClass = "";
                    if (idx === 1) colorClass = "#FF9F45";
                    if (idx === 2) colorClass = "#FF4545";
                    return (
                      <span key={idx} style={{ color: colorClass }}>
                        {v}&nbsp;
                      </span>
                    );
                  })}
                </span>
              </div>

              <div className="card-diagram__bar__element">
                <div
                  className="card-diagram__bar__fill"
                  style={{ height: `${percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="card-diagram__value">
          <span className="card-diagram__value__title"> Выполнено</span>
          <span className="card-diagram__value__count"> {value}</span>
        </div>

        <div className="card-diagram__sla">
          <span className="card-diagram__sla__title"> SLA</span>
          <span className={`card-diagram__sla__count ${getSlaColor()}`}>
            {sla}%
          </span>
        </div>
      </div>
    </div>
  );
}
export default CardDiagram;
