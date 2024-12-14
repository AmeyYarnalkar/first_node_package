const axios = require('axios');

/**
 * Fetches a random dog image from the Dog API.
 * @returns {Promise<string|null>} - The URL of the dog image or null if there's an error.
 */
async function getDogImage() {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        console.log('Here is your dog image:', response.data.message);
        return response.data.message;
    } catch (error) {
        console.error('Failed to fetch dog image:', error.message);
        return null;
    }
}

module.exports = getDogImage;

// Test locally by running this file directly.
if (require.main === module) {
    getDogImage();
}
