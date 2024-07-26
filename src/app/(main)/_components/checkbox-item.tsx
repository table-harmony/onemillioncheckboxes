"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { SET_LENGTH } from "../../../../convex/sets";

import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { ConvexError } from "convex/values";

export function CheckboxItem({ index }: { index: number }) {
  const { toast } = useToast();

  const setIndex = Math.floor(index / SET_LENGTH);
  const set = useQuery(api.sets.getSet, {
    index: setIndex,
  });

  const bit = 1 << index % SET_LENGTH;
  const isChecked = set ? (set.bitVector & bit) !== 0 : false;

  const updateCheckbox = useMutation(
    api.sets.updateCheckbox
  ).withOptimisticUpdate((localStore) => {
    const set = localStore.getQuery(api.sets.getSet, {
      index: setIndex,
    });
    if (set) {
      if (!isChecked) {
        set.bitVector |= bit;
      } else {
        set.bitVector &= ~bit;
      }

      localStore.setQuery(
        api.sets.getSet,
        {
          index: setIndex,
        },
        set
      );
    }
  });

  return (
    <div>
      <Checkbox
        aria-label={`${index} checkbox`}
        checked={isChecked}
        onCheckedChange={(isChecked) => {
          updateCheckbox({ index, isChecked: Number(isChecked) }).catch(
            (error) => {
              let message = "Something went wrong!";

              if (error instanceof ConvexError) message = error.data;

              toast({ description: message, variant: "destructive" });
            }
          );
        }}
      />
    </div>
  );
}
