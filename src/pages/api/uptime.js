import axios from 'axios';

let uptimeData = [];

// Your Vercel site URL
const siteUrl = 'https://social.rikimade.com'; // Replace with your Vercel URL

// Function to check the site's status
const checkSiteStatus = async () => {
  try {
    // Make a request to the Vercel site
    const response = await axios.get(siteUrl);

    // If the request is successful (status 200), the site is up
    if (response.status === 200) {
      logStatus('UP');
    }
  } catch (error) {
    // If there's an error (network issue, HTTP error, etc.), log the reason for downtime
    let explanation = '';

    // Check if the error is an HTTP response error
    if (error.response) {
      // Server responded with a status other than 2xx
      explanation = `HTTP Status ${error.response.status} - ${error.response.statusText}`;
    } else if (error.request) {
      // Request was made, but no response was received (e.g., network issues)
      explanation = 'No response received (network issue or server not reachable)';
    } else {
      // Something else caused the error (e.g., config issues)
      explanation = `Error: ${error.message}`;
    }

    logStatus('DOWN', explanation);
  }
};

// Function to log the status with date, time, and explanation (if down)
const logStatus = (status, explanation = '') => {
  const currentTime = new Date().toLocaleString();

  // Push the status into uptimeData (true for 'UP', false for 'DOWN')
  if (status === 'UP') {
    uptimeData.push(true);
  } else {
    uptimeData.push(false);
  }

  console.log(`[${currentTime}] Site is ${status}${explanation ? ` - Reason: ${explanation}` : ''}`);

  // Keep only the last 90 entries (for a 90-day view)
  if (uptimeData.length > 90) {
    uptimeData.shift();
  }
};

// Schedule the status check every 5 minutes (300000 milliseconds)
setInterval(checkSiteStatus, 300000); // Adjust the interval as needed

// Run the check immediately when the script starts
checkSiteStatus();

// Force Astro to recognize the `/api/status/uptime.json` path
export async function getStaticPaths() {
  return [{ params: { path: 'uptime' } }];
}

export async function GET() {
  return new Response(JSON.stringify({ uptimeData }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}