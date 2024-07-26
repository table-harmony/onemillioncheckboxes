"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PartyPopperIcon } from "lucide-react";

export function Scoreboard() {
  const topUsers = useQuery(api.users.getScoreboard);
  const position = useQuery(api.users.currentPosition);

  return (
    <Table className="mb-10">
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Record</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topUsers?.map((user) => (
          <TableRow key={user._id}>
            <TableCell className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={user.image} alt="profile" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {user.name}
            </TableCell>
            <TableCell>{user.record}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {Number(position) <= 5 ? (
        <TableCaption className="flex items-center gap-2">
          <span>You are on the scoreboard</span>
          <PartyPopperIcon />
        </TableCaption>
      ) : (
        <TableCaption className="flex items-center">
          You are number {position}
        </TableCaption>
      )}
    </Table>
  );
}
