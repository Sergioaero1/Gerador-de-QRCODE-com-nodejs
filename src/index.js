import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/qrcode/createqr.js";
import createpassword from "./services/password/createpassword.js";

async function  main() {
    prompt.get(mainPrompt, async(err, choose) => {
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createpassword();
    });

    prompt.start();
}

main();
