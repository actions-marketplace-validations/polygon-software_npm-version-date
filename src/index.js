import action from "@actions/core";
import versionAssembler from "./versionassembler.js"
import pkgjson from "./pkgjson.js";

async function run() {
  const V = action.getInput("V");
  const schema = action.getInput("schema");
  const increasePatch = action.getInput("increase-patch").toLowerCase() === 'true';

  const versionString = versionAssembler(schema, V, increasePatch);
  return pkgjson.setVersion(versionString);
}

run();