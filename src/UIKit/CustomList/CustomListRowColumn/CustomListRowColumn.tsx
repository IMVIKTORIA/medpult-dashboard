import React, { useEffect, useRef, useState } from "react";
import { ItemData, ListColumnData } from "../CustomListTypes";

interface ListColumnProps extends ListColumnData {
  data: string | string[];
  listRef?: React.RefObject<HTMLDivElement>;
  rowData?: any;
}

function CustomListRowColumn(props: ListColumnProps) {
  const { fr, data, isLink, onClick, code, rowData } = props;

  const getColor = (index: number): string => {
    switch (index) {
      case 0:
        return "#2D2E2F";
      case 1:
        return "#FF9F45";
      case 2:
        return "#FF4545";
      default:
        return "#2D2E2F";
    }
  };

  const getSlaColor = (slaValue: string): string => {
    const num = parseFloat(slaValue.replace("%", ""));

    if (isNaN(num)) return "#2D2E2F";
    if (num > 90) return "#21A038";
    if (num >= 70) return "#FF9F45";
    return "#FF4545";
  };

  const isGroupColumn = code === "group";
  const isGroupRow = Array.isArray(rowData?.groupData);
  const groupTextColor = isGroupColumn && isGroupRow ? "#4588E5" : undefined;
  const textWeight = isGroupColumn && !isGroupRow ? "400" : "600";

  let slaTextColor: string | undefined;
  if (code === "sla" && typeof data === "string") {
    slaTextColor = getSlaColor(data);
  }
  const textColor = slaTextColor ?? groupTextColor ?? undefined;

  return (
    <div
      className={
        isLink
          ? "custom-list-row-column custom-list-row-column__link"
          : "custom-list-row-column"
      }
      style={{
        flex: fr,
        minWidth: 0,
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          maxWidth: "100%",
          color: textColor,
          fontWeight: textWeight,
        }}
      >
        {Array.isArray(data) ? (
          data.map((value, idx) =>
            value === "0" ? null : (
              <span
                key={idx}
                style={{
                  color: getColor(idx),
                  fontWeight: "inherit",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                title={value}
              >
                {value}
              </span>
            )
          )
        ) : (
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            title={data}
          >
            {data}
          </span>
        )}
      </span>
    </div>
  );
}
export default CustomListRowColumn;
