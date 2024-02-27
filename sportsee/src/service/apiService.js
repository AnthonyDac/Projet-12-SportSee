const isMockEnabled = import.meta.env.VITE_API_MOCK === 'true';
const API_BASE_URL = isMockEnabled ? '/src/mock/data.json' : import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

async function fetchData(endpoint) {
    try {
        const url = isMockEnabled ? `${API_BASE_URL}` : `${API_BASE_URL}/${endpoint}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        // Retourner des données explicites pour une meilleure gestion des erreurs
        return { error: 'Erreur lors de la récupération des données' };
    }
}

async function getUserInfo(userId) {
    const data = await fetchData(`user/${userId}`);
    return isMockEnabled ? data.userInfos : data.data;  // Retourner directement data
}

async function getActivityData(userId) {
    const data = await fetchData(`user/${userId}/activity`);
    return isMockEnabled ? data.userActivity : data.data;  // Retourner directement data
}

async function getAverageSessionsData(userId) {
    const data = await fetchData(`user/${userId}/average-sessions`);
    return isMockEnabled ? data.userSessions : data.data;  // Retourner directement data
}

async function getPerformancesData(userId) {
    const data = await fetchData(`user/${userId}/performance`);
    return isMockEnabled ? data.userPerformance : data.data;  // Retourner directement data
}

export { getUserInfo, getActivityData, getAverageSessionsData, getPerformancesData };
