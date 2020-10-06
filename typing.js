var TEXT_ID = "text_bar"

async function main() {
  var text_bar = document.getElementById(TEXT_ID);

  commands = [
  "go test",
  "mkdir target",
  "go build -o target/main main.go",
  "this is a really long sentence! Look at it my dude! It wraps all the way around making the text box seem bigger!",
  'echo "target" > .gitignore',
  "git status",
  "git add .",
  'git commit -m "Finalized API wrapper"',
  "git push",
  "clear"];

  var text = "|";
  while (true) {
    await wait(500);
    for (let text_to_type in commands) {
      await wait(1000);
      text = "|";
      for (let c of commands[text_to_type]) {
        text = text.slice(0, text.length -1) + c
        text += "|"
        text_bar.innerHTML = text;
        await type(25, 200);
      }

      await wait(1000);

      for (i=text.length; i >= 0; i--) {
        await type(10, 50);
        text = text.slice(0,i-1);
        text += "|"
        text_bar.innerHTML = text;
      }
      var text = "|";
    }
  }
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

async function type(min, max) {
  await new Promise(r => setTimeout(r, getRandom(min, max)));
}

async function wait(t) {
  await new Promise(r => setTimeout(r, t));
}
