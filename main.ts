import { load } from "./deps.ts";
// import { PrismaClient } from "./generated/client/deno/edge.ts";
import { BitwardenClient } from "./dev_deps.ts";

const env = await load();
console.log(env);

const client = new BitwardenClient();

for (const key in env) {
  if (Object.prototype.hasOwnProperty.call(env, key)) {
    console.log(key, env[key]);
    if (key === "BWS_ACCESS_TOKEN") {
      const result = client.loginWithAccessToken(
        env[key],
      ).then((res) => {
        console.log("response result", res.success);
      }).catch((err) => {
        console.error(err);
      });
      console.log("result", result);
      // if (!result.success) {
      //   throw Error("Authentication failed");
      // }

      console.log(result);
    }
  }
}

// const prisma = new PrismaClient();

// async function main() {
//   // ... you will write your Prisma Client queries here
//   const allUsers = await prisma.agency.findFirst();
//   console.log(allUsers);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     return false;
//     // process.exit(1);
//   });

export * from "./src/storage/mod.ts";
// export * from "./src/media/mod.ts";
// export * from "./src/notifications/email/mod.ts";

export function add(a: number, b: number): number {
  return a + b;
}
// https://docs.deno.com/runtime/tutorials/manage_dependencies
// Learn more at https://deno.land/manual/examples/module_metadata#concepts
// if (import.meta.main) {
//   console.log("Add 2 + 3 =", add(2, 3));
// }
