"use client";

import { FixedSizeGrid as Grid } from "react-window";
import { useMeasure } from "react-use";

import { CheckboxItem } from "./checkbox-item";
import { SET_LENGTH } from "../../../../convex/sets";

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

  if (index < 100) console.log(index);

  //return (
  //  <div style={style}>
  //    {index}, {Math.floor(index / SET_LENGTH)}
  //  </div>
  //);

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
        columnCount={columnCount}
        columnWidth={COLUMN_WIDTH}
        height={height}
        width={width}
        rowCount={Math.ceil(NUM_CHECKBOXES / columnCount)}
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
