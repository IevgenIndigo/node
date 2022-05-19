const API_URL = 'http://localhost:8000/v1';

async function httpGetPlanets() {
    // Load planets and return as json
    const response = await fetch(API_URL + '/planets');
    return await response.json();
}

async function httpGetLaunches() {
    // Load launches, sort by flight number, and return as JSON.
    const response = await fetch(API_URL + '/launches');
    const fetchLaunches = await response.json();
    return fetchLaunches.sort((a, b) => {
        return a.flightNumber - b.flightNumber;
    });
}

async function httpSubmitLaunch(launch) {
    // Submit given launch data to launch system.
    try {
        return await fetch(`${API_URL}/launches`, {
            method: "post",
            body: JSON.stringify(launch),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (err) {
        return {
            ok: false
        };
    }
}

async function httpAbortLaunch(id) {
    // Delete launch with given ID.
    try {
        return await fetch(`${API_URL}/launches/${id}`, {
            method: "delete"
        })
    } catch (err) {
        return {
            ok: false
        }
    }
}

export {
    httpGetPlanets,
    httpGetLaunches,
    httpSubmitLaunch,
    httpAbortLaunch,
};