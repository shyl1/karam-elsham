import { exec } from "child_process";
import dotenv from "dotenv";
dotenv.config();

const { VITE_LOCIZE_PROJECT_ID, VITE_LOCIZE_API_KEY } = process.env;

if (!VITE_LOCIZE_PROJECT_ID || !VITE_LOCIZE_API_KEY) {
    console.error("Missing LOCIZE_PROJECT_ID or LOCIZE_API_KEY");
    process.exit(1);
}

const cmd = `locize download --project-id ${VITE_LOCIZE_PROJECT_ID} --api-key ${VITE_LOCIZE_API_KEY} --path public/locales`;

exec(cmd, (err, stdout, stderr) => {
    if (err) {
        console.error(stderr);
        process.exit(1);
    }
    console.log(stdout);
});
