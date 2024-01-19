import fs from "fs";

let data =
    'import { defineClientConfig } from "@vuepress/client";\n' +
    'import ElementPlus from "element-plus";\n' +
    'import * as ElementPlusIconsVue from "@element-plus/icons-vue";\n' +
    'import "element-plus/dist/index.css";\n\n' +

    'export default defineClientConfig({\n' +
        'enhance({ app, router, siteData }) {\n' +
            'app.use(ElementPlus);\n' +
            'Object.keys(ElementPlusIconsVue).forEach(key => {\n' +
                'app.component(key, ElementPlusIconsVue[key]);\n' +
            '});\n' +
            'router.afterEach((to) => {\n' +
            '});\n' +
        '},\n' +
        'setup() {},\n' +
        'rootComponents: []\n' +
    '});'

function gen() {
    let filesL1 = fs.readdirSync("../").filter(file => {
        return (file !== ".vuepress" && file != "README.md");
    });
    console.log("Level 1: ", filesL1);
    for (let i = 0; i < filesL1.length; i++) {
        let filesL2Path = "../" + filesL1[i];
        let filesL2 = fs.readdirSync(filesL2Path);
        console.log("Level 2: ", filesL2);
        for (let j = 0; j < filesL2.length; j++) {
            let fileL3Path = filesL2Path + "/" + filesL2[j];
            let fileStat = fs.statSync(fileL3Path);
            if (fileStat.isDirectory()) {
                let filesL3 = fs.readdirSync(fileL3Path);
                console.log("Level 3: ", filesL3);
            }
        }
    }

    fs.writeFileSync("./client-dynamic.ts", data);
}

gen();



