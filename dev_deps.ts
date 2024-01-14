/** deps.ts pattern
 *
 * All required remote dependencies are referenced in this file
 * and the required methods and classes are re-exported.
 *
 * @see https://docs.deno.com/runtime/tutorials/manage_dependencies
 */
export { assertEquals } from "https://deno.land/std@0.211.0/assert/mod.ts";
export { build, emptyDir } from "https://deno.land/x/dnt@0.39.0/mod.ts";
export { BitwardenClient } from "npm:@bitwarden/sdk-napi@^0.3.1";
