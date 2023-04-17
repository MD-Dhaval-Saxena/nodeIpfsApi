const pinataSDK = require("@pinata/sdk");
const { fs, vol } = require("memfs");

const pinata = new pinataSDK(
  "5eddc2ad525518fc3e8e",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwYjQ5NjFlNC1jOGNiLTQwMzctYjczYS1iYzdmZGUyODllYzUiLCJlbWFpbCI6ImRoYXZhbC5zYXhlbmFAbWluZGRlZnQubmV0IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjcyMzljOTNiYmQyOGZlMTkzYzFhIiwic2NvcGVkS2V5U2VjcmV0IjoiMTkzOGFjNjg0OGNhYTJmZTI4ODM2MzVlZjg3YjRlYjYzOWJhZjZiNzE0YzJhNTE3YTRmZjIxNGI5YmE4NmMxMSIsImlhdCI6MTY4MDc4MjIyN30.yQva2gEZUvCR7xOEz-sEqkEl_9lHy1tDkL-ah_QuJMM"
);

(async () => {
  try {
    const base64 = "base64 file string";
    const buf = Buffer.from(base64, "base64");
    fs.readFileSync("myPic.png", buf);

    const read = vol.createReadStream("myPic.png");

    const res = await pinata.pinFileToIPFS(read);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
})();
