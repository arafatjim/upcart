const https = require('https');
const fs = require('fs');

// Read token from vercel config
let token = process.env.VERCEL_TOKEN;
if (!token) {
  try {
    const authFile = `${process.env.USERPROFILE}/.vercel/auth.json`;
    const authData = JSON.parse(fs.readFileSync(authFile, 'utf8'));
    token = authData.token;
  } catch (e) {
    console.error('Could not find Vercel token');
    process.exit(1);
  }
}

const projectId = 'upcart';
const envVars = [
  { key: 'NEXT_PUBLIC_SANITY_PROJECT_ID', value: 'yuqh2xqj' },
  { key: 'NEXT_PUBLIC_SANITY_DATASET', value: 'production' }
];

async function setEnvVar(env) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      key: env.key,
      value: env.value,
      target: 'production'
    });

    const options = {
      hostname: 'api.vercel.com',
      path: `/v11/projects/${projectId}/env`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(body));
        } else {
          reject(new Error(`${res.statusCode}: ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

(async () => {
  try {
    for (const env of envVars) {
      console.log(`Setting ${env.key}...`);
      await setEnvVar(env);
      console.log(`✓ Set ${env.key}`);
    }
    console.log('All environment variables set successfully!');
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
})();
