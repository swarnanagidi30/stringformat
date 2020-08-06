// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

const appName = "String Format";
const appDiv: HTMLElement | null = document.getElementById('root');
if(appDiv != null)
{
  appDiv.innerHTML = `<h1>${appName}</h1>`;
}

// Formats a string with the supplied parameter(s)
// Examples Usage:
//  formatString("User {0} logged in", 'John');
//  formatString("Max {0} words allowed", 128.8999);
//  formatString("Form {0} to {1}", [10, 100]);
function formatString(sTemplate: string, ...params: (string | number) []) {
  params.forEach((p, index) => {
    sTemplate = sTemplate.replace(
      new RegExp("\\{" + index + "\\}", "g"),
      String(p)
    );
  });
  return sTemplate;
}

function writeLine(message:string){
  if(appDiv != null){
    appDiv.innerHTML += `<p>${message}</p>`;
  } else {
    console.log(message);
  }
}

// Test cases
writeLine(formatString("User {0} logged in", "John"));
writeLine(formatString("Max {0} words allowed", 128.8999));
writeLine(formatString("Form {0} to {1}", 10, 100));
