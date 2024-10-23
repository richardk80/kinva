import axios from 'axios';

// Declare the uptimeData array to store uptime statuses
let uptimeData = [];

// Your Vercel site URL
const siteUrl = 'https://social.rikimade.com'; // Replace with your Vercel URL

const checkSiteStatus = async () => {
  try {
    const response = await axios.get(siteUrl);
    if (response.status === 200) {
      logStatus('UP');
    }
  } catch (error) {
    let explanation = '';

    if (error.response) {
      explanation = `HTTP Status ${error.response.status} - ${error.response.statusText}`;
    } else if (error.request) {
      explanation = 'No response received (network issue or server not reachable)';
    } else {
      explanation = `Error: ${error.message}`;
    }
    logStatus('DOWN', explanation);
  }
};

// The function to log the status into the uptimeData array
const logStatus = (status, explanation = '') => {
  const currentTime = new Date().toLocaleString();
  uptimeData.push({ status, explanation, time: currentTime });

  // Keep only the last 90 entries in the uptimeData array
  if (uptimeData.length > 90) {
    uptimeData.shift(); // Remove the oldest entry
  }
};

// Schedule the status check every 5 minutes (300000 milliseconds)
setInterval(checkSiteStatus, 300000); // Adjust the interval as needed

// Run the check immediately when the script starts
checkSiteStatus();

export async function GET() {
  return new Response(JSON.stringify({ uptimeData }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}