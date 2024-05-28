// server.js

// pages/api/colors.js

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://csscolorsapi.com/api/colors');
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
