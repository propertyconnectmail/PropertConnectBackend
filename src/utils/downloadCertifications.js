const axios = require('axios');
const archiver = require('archiver');

async function downloadCertificationsAsZip(urls, res) {
  if (!urls || !Array.isArray(urls)) {
    throw new Error('Invalid or missing urls parameter');
  }

  res.attachment('certifications.zip');
  const archive = archiver('zip');
  archive.pipe(res);

  for (let fileUrl of urls) {
    try {
      const response = await axios.get(fileUrl, { responseType: 'stream' });
      const filename = decodeURIComponent(fileUrl.split('/').pop());
      archive.append(response.data, { name: filename });
    } catch (err) {
      console.error(`Failed to download: ${fileUrl}`, err.message);
    }
  }

  await archive.finalize();
}

module.exports = { downloadCertificationsAsZip };
