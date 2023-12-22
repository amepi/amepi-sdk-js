import { pgTable, serial, text, varchar } from "npm:drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});

export function add(a: number, b: number): number {
  return a + b;
}
// https://docs.deno.com/runtime/tutorials/manage_dependencies 
// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}

// Drizzle ORM
export function dataFramework() {

}

// import { Options } from "postgres";
// import { DrizzleConfig } from "./deps.ts";