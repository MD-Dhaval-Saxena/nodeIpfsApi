import { ThirdwebStorage } from "@thirdweb-dev/storage";
import fs from 'fs';
const storage = new ThirdwebStorage();
var file = fs.readFileSync('myPic.png');

const uri = await storage.upload(file);
console.info(uri);

