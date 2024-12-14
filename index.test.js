const getDogImage = require('./index');
const axios = require('axios');

jest.mock('axios');

test('fetches a dog image successfully', async () => {
    axios.get.mockResolvedValue({ data: { message: 'http://example.com/dog.jpg' } });

    const image = await getDogImage();
    expect(image).toBe('http://example.com/dog.jpg');
});

test('handles API failure gracefully', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    const image = await getDogImage();
    expect(image).toBeNull();
});
