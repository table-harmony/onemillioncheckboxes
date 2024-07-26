"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Scoreboard() {
  const topUsers = useQuery(api.users.getScoreboard);

  return (
    <Table className="my-10">
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
    </Table>
  );
}
