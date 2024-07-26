"use client";

import { FixedSizeGrid as Grid } from "react-window";
import { useMeasure } from "react-use";

import { CheckboxItem } from "./checkbox-item";

function Cell({
  data,
  columnIndex,
  rowIndex,
  style,
}: {
  data: { columnCount: number };
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
}) {
  const index = rowIndex * data.columnCount + columnIndex;

  if (index > NUM_CHECKBOXES) return null;

  return (
    <div key={index} style={style}>
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
        rowHeight={ROW_HEIGHT}
        columnWidth={COLUMN_WIDTH}
        rowCount={Math.ceil(NUM_CHECKBOXES / columnCount)}
        columnCount={columnCount}
        itemData={{
          columnCount: columnCount,
        }}
      >
        {Cell}
      </Grid>
    </div>
  );
}
