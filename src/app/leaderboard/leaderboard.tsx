"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  CrownIcon,
  SquareCheckIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const PER_PAGE = 5;

export function Leaderboard() {
  const users = useQuery(api.users.getScoreboard);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil((users?.length || 0) / PER_PAGE);

  const startIndex = page * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;

  return (
    <div className="mx-auto max-w-5xl">
      {/** Podium */}
      <div className="mb-10 flex flex-col items-end justify-center gap-2 p-4 md:flex-row md:gap-4 lg:p-6">
        {/** Second place */}
        <div className="order-2 flex w-full flex-col items-center md:order-1">
          {/** User data */}
          <div className="flex w-full items-center justify-center border-b-4 border-muted-foreground/50">
            <div className="flex w-[96%] flex-col items-center gap-3 bg-gradient-to-t from-neutral-300/20 to-100% py-4 dark:from-neutral-300/10">
              {/**Image and crown */}
              <div className="flex flex-col items-center gap-2">
                <CrownIcon className="size-8 text-neutral-400 dark:text-neutral-300" />

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted md:h-16 md:w-16">
                  <Avatar>
                    <AvatarImage src={users?.at(1)?.image} alt="profile" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/** Info */}
              <div className="flex flex-col items-center justify-center gap-0.5">
                <span className="xs:text-sm text-ellipsis text-xs font-semibold md:text-lg">
                  {users?.at(1)?.name}
                </span>

                <span className="text-xs text-neutral-400 dark:text-neutral-300 md:text-base">
                  {users?.at(1)?.record}
                </span>
              </div>
            </div>
          </div>

          {/** Podium  */}
          <div className="w-full bg-primary-foreground p-4 py-6 md:p-6 md:py-8">
            <div className="flex items-center justify-center gap-1">
              <span className="text-xs text-muted-foreground md:text-lg">
                #
              </span>
              <span className="text-sm font-semibold md:text-2xl">2</span>
            </div>
          </div>
        </div>

        {/** First place */}
        <div className="order-1 flex w-full flex-col items-center md:order-2">
          {/** User data */}
          <div className="flex w-full items-center justify-center border-b-4 border-muted-foreground/50">
            <div className="flex w-[96%] flex-col items-center gap-3 bg-gradient-to-t from-yellow-500/5 to-100% py-4 dark:from-yellow-500/10">
              {/**Image and crown */}
              <div className="flex flex-col items-center gap-2">
                <CrownIcon className="size-8 text-yellow-500" />

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted md:h-16 md:w-16">
                  <Avatar>
                    <AvatarImage src={users?.at(0)?.image} alt="profile" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/** Info */}
              <div className="flex flex-col items-center justify-center gap-0.5">
                <span className="xs:text-sm text-ellipsis text-xs font-semibold md:text-lg">
                  {users?.at(0)?.name}
                </span>

                <span className="text-xs text-yellow-500 md:text-base">
                  {users?.at(0)?.record}
                </span>
              </div>
            </div>
          </div>

          {/** Podium  */}
          <div className="w-full bg-primary-foreground p-4 py-8 md:p-6 md:py-12">
            <div className="flex items-center justify-center gap-1">
              <span className="text-xs text-muted-foreground md:text-lg">
                #
              </span>
              <span className="text-sm font-semibold md:text-2xl">1</span>
            </div>
          </div>
        </div>

        {/** Third place */}
        <div className="order-3 flex w-full flex-col items-center">
          {/** User data */}
          <div className="flex w-full items-center justify-center border-b-4 border-muted-foreground/50">
            <div className="flex w-[96%] flex-col items-center gap-3 bg-gradient-to-t from-blue-300/20 to-100% py-4 dark:from-blue-300/10">
              {/**Image and crown */}
              <div className="flex flex-col items-center gap-2">
                <CrownIcon className="size-8 text-blue-500" />

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted md:h-16 md:w-16">
                  <Avatar>
                    <AvatarImage src={users?.at(2)?.image} alt="profile" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/** Info */}
              <div className="flex flex-col items-center justify-center gap-0.5">
                <span className="xs:text-sm text-ellipsis text-xs font-semibold md:text-lg">
                  {users?.at(2)?.name}
                </span>

                <span className="text-xs text-blue-500 md:text-base">
                  {users?.at(2)?.record}
                </span>
              </div>
            </div>
          </div>

          {/** Podium  */}
          <div className="w-full bg-primary-foreground p-4 md:p-6">
            <div className="flex items-center justify-center gap-1">
              <span className="text-xs text-muted-foreground md:text-lg">
                #
              </span>
              <span className="text-sm font-semibold md:text-2xl">3</span>
            </div>
          </div>
        </div>
      </div>

      {/** Toolbar */}
      <div className="mb-10 flex justify-center gap-2">
        <Button
          size="icon"
          onClick={() => setPage(0)}
          disabled={page === 0}
          variant="outline"
        >
          <span className="sr-only">first</span>
          <ChevronsLeftIcon className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setPage((currentPage) => Math.max(currentPage - 1, 0))}
          disabled={page === 0}
        >
          <span className="sr-only">prev</span>
          <ChevronLeftIcon className="size-4" />
        </Button>
        <Button
          size="icon"
          onClick={() =>
            setPage((currentPage) => Math.min(currentPage + 1, totalPages - 1))
          }
          disabled={page === totalPages - 1}
          variant="outline"
        >
          <span className="sr-only">next</span>
          <ChevronRightIcon className="size-4" />
        </Button>
        <Button
          size="icon"
          onClick={() => setPage(totalPages - 1)}
          disabled={page === totalPages - 1}
          variant="outline"
        >
          <span className="sr-only">last</span>
          <ChevronsRightIcon className="size-4" />
        </Button>
      </div>

      {/** Table */}
      <Table className="mb-10">
        <TableBody>
          {users?.slice(startIndex, endIndex)?.map((user, index) => (
            <TableRow key={user._id}>
              <TableCell className="flex items-center gap-8">
                <div className="space-x-0.5">
                  <span className="text-muted-foreground">#</span>
                  <span className="font-bold">{startIndex + index + 1}</span>
                </div>
                <span className="text-ellipsis">{user.name}</span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <SquareCheckIcon className="size-3" />
                  {user.record}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
