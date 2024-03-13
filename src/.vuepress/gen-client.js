import fs from "fs";

function genClientConfig() {
  let dataCond = "\n";
  let dataDebug = false;

  let filesL1 = fs.readdirSync("../").filter(file => {
    return file !== ".vuepress" && file !== "README.md";
  });
  if (dataDebug) {
    console.log("Level 1: ", filesL1);
  }
  for (let i = 0; i < filesL1.length; i++) {
    let filesL2Path = "../" + filesL1[i];
    let filesL2 = fs.readdirSync(filesL2Path);
    if (dataDebug) {
      console.log("Level 2: ", filesL2);
    }
    for (let j = 0; j < filesL2.length; j++) {
      let fileL3Path = filesL2Path + "/" + filesL2[j];
      let fileStat = fs.statSync(fileL3Path);
      if (fileStat.isDirectory()) {
        continue; // 跳过目录
      }
      let filesL4Path = fileL3Path;
      let fileContents = fs.readFileSync(filesL4Path).toString();
      let fileRegexp = /order: 1\b/;
      if (fileRegexp.test(fileContents)) {
        let filesL4Dir = fileL3Path.replace("..", "") + "/";
        filesL4Path = filesL4Path.replace("..", "");
        if (dataDebug) {
          console.log(filesL4Path);
        }
        dataCond +=
          "            if (to.path === '" +
          filesL4Dir +
          "') {\n" +
          "                router.push('" +
          filesL4Path +
          "')\n" +
          "            }\n";
      }
    }
  }

  let data =
    'import { defineClientConfig } from "@vuepress/client";\n' +
    'import ElementPlus from "element-plus";\n' +
    'import * as ElementPlusIconsVue from "@element-plus/icons-vue";\n' +
    'import "element-plus/dist/index.css";\n\n' +
    "export default defineClientConfig({\n" +
    "    enhance({ app, router, siteData }) {\n" +
    "        app.use(ElementPlus);\n" +
    "        Object.keys(ElementPlusIconsVue).forEach(key => {\n" +
    "            app.component(key, ElementPlusIconsVue[key]);\n" +
    "        });\n" +
    "        router.afterEach((to) => {\n" +
    dataCond +
    "        });\n" +
    "    },\n" +
    "    setup() {},\n" +
    "    rootComponents: []\n" +
    "});";
  fs.writeFileSync("./client.ts", data);
}

genClientConfig();