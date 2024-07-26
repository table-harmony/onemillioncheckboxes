"use client";

import { FixedSizeGrid as Grid } from "react-window";
import { useMeasure } from "react-use";

import { CheckboxItem } from "./checkbox-item";

function Cell({
  columnIndex,
  rowIndex,
  style,
  data,
}: {
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
  data: { columnCount: number };
}) {
  const index = rowIndex * data.columnCount + columnIndex;

  return (
    <div style={style}>
      <CheckboxItem index={index} />
    </div>
  );
}

const NUM_CHECKBOXES = 1_000_000;
const COLUMN_WIDTH = 30;
const ROW_HEIGHT = 30;

export function CheckboxGrid() {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  const columnCount = Math.floor(width / COLUMN_WIDTH);

  return (
    <div ref={ref} className="w-full h-screen">
      <Grid
        width={width}
        height={height}
        columnCount={columnCount}
        rowCount={Math.ceil(NUM_CHECKBOXES / columnCount)}
        columnWidth={COLUMN_WIDTH}
        rowHeight={ROW_HEIGHT}
        itemData={{
          columnCount: columnCount,
        }}
      >
        {Cell}
      </Grid>
    </div>
  );
}
