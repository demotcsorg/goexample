const { exec, execFile } = require('child_process');
const core = require('@actions/core');
const github = require('@actions/github');
var child_process = require('child_process');

try {

  const path = core.getInput('go_file_name');
  let filepath= path;

  exec(`go build ${filepath}.go && chmod +x ${filepath} && ./${filepath}`,
  (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
          console.log(`exec error: ${error}`);
      }
  });

  exec(`go run ${filepath}.go`,
  (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
          console.log(`exec error: ${error}`);
      }
  });

} catch (error) {
  core.setFailed(error.message);
}