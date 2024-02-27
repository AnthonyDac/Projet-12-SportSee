import React, { useState, useEffect } from 'react';
import './DashboardComponent.css';
import BarchartComponenent from '../BarChart/BarchartComponent';
import CardsDataComponent from '../CardsData/CardsDataComponent';
import AverageSessionsComponent from '../AverageSessions/AverageSessionsComponent';
import ScoreComponent from '../Score/ScoreComponent';
import RadarchartComponent from '../RadarChart/RadarchartComponent';
import { getUserInfo, getActivityData, getAverageSessionsData, getPerformancesData } from '../../service/apiService';

function DashboardComponent() {
    const initialData = [
        { name: 'Janvier', kilogram: 69, calories: 70 },
    ];

    const [data, setDataActivity] = useState(initialData);
    const [userData, setUserInfos] = useState({ firstName: 'Utilisateur' });
    const [userSessions, setUserSessions] = useState({ sessions: [] });
    const [userPerformance, setUserPerformance] = useState({ data: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDataForUser(userId) {
            try {
                const userInfo = await getUserInfo(userId);
                const activityData = await getActivityData(userId);
                const avgSessionsData = await getAverageSessionsData(userId);
                const performancesData = await getPerformancesData(userId);

                setUserInfos(userInfo);

                if (activityData && activityData.sessions) {
                    const sessionsFiltered = activityData.sessions.map((session, index) => ({
                        name: index + 1,
                        kilogram: session.kilogram,
                        calories: session.calories,
                    }));
                    setDataActivity(sessionsFiltered);
                }

                setUserSessions(avgSessionsData);
                setUserPerformance(performancesData);

            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            } finally {
                setLoading(false);
            }
        }

        const url = window.location.href;
        const urlSplit = url.split("/");
        const userId = urlSplit[4];

        fetchDataForUser(userId);
    }, []);

    // Vérifier si les données nécessaires sont présentes avant de rendre le JSX
    if (loading) {
        return <p className='errorMessage'>Chargement...</p>;
    }

    return (
        userData && data && userSessions && userPerformance ? (<>
            <div className="dashboardTitle">
                <h1>Bonjour <span>{userData.userInfos.firstName}</span></h1>
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="dashboardCards">
                <div className="barChartContainer">
                    <BarchartComponenent data={data} />
                    <div className="dashboardSquaresContainer">
                        <AverageSessionsComponent datas={userSessions} />
                        <div className="dashboardSquaresContainerElement">
                            <RadarchartComponent data={userPerformance} />
                        </div>
                        <ScoreComponent dataScore={userData.score ? userData.score : userData.todayScore} />
                    </div>
                </div>
                <div className="keyDataContainer">
                    <CardsDataComponent data={userData} />
                </div>
            </div>
        </>) : <p className='errorMessage'>Erreur de chargement des données utilisateur..</p>
    );
}

export default DashboardComponent;
