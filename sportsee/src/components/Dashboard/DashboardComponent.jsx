import React, { useState, useEffect } from 'react';
import './DashboardComponent.css';
import BarchartComponenent from '../BarChart/BarchartComponent';
import CardsDataComponent from '../CardsData/CardsDataComponent';
import AverageSessionsComponent from '../AverageSessions/AverageSessionsComponent';
import ScoreComponent from '../Score/ScoreComponent';
import RadarchartComponent from '../RadarChart/RadarchartComponent';

function NavbarComponent() {
    // Données
    const initialData = [
        { name: 'Janvier', kilogram: 69, calories: 70 },
    ];

    const [data, setDataActivity] = useState(initialData);
    const [userData, setUserInfos] = useState({ firstName: 'Utilisateur' }); // Valeur par défaut
    const [userSessions, setUserSessions] = useState({ sessions: [{ day: 1, sessionLength: 30 }] }); // Valeur par défaut
    const [userPerformance, setUserPerformance] = useState({ sessions: [{ day: 1, sessionLength: 30 }] }); // Valeur par défaut

    useEffect(() => {
        async function getUser() {
            // Récupérer l'id de l'utilisateur en paramètre d'URL
            const url = window.location.href;
            const urlSplit = url.split("/");
            const userId = urlSplit[4];
            // Récupérer les données de l'utilisateur
            const response = await fetch(`http://localhost:3000/user/${userId}`);
            const userData = await response.json();
            setUserInfos(userData.data);
        }

        async function getActivityOfUser() {
            // Récupérer l'id de l'utilisateur en paramètre d'URL
            const url = window.location.href;
            const urlSplit = url.split("/");
            const userId = urlSplit[4];
            // Récupérer les données de l'utilisateur
            const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
            const userData = await response.json();
            const sessions = userData.data.sessions;
            const sessionsFiltered = sessions.map((session, index) => {
                return {
                    name: index + 1,
                    kilogram: session.kilogram,
                    calories: session.calories,
                }
            })
            setDataActivity(sessionsFiltered);
        }

        async function getAverangeSessionsOfUser() {
            // Récupérer l'id de l'utilisateur en paramètre d'URL
            const url = window.location.href;
            const urlSplit = url.split("/");
            const userId = urlSplit[4];
            // Récupérer les données de l'utilisateur
            const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
            const userData = await response.json();
            const sessions = userData.data;
            setUserSessions(sessions);
        }

        async function getPerformancesOfUser() {
            // Récupérer l'id de l'utilisateur en paramètre d'URL
            const url = window.location.href;
            const urlSplit = url.split("/");
            const userId = urlSplit[4];
            // Récupérer les données de l'utilisateur
            const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
            const userData = await response.json();
            const performances = userData.data;
            setUserPerformance(performances);
        }


        getPerformancesOfUser();
        getAverangeSessionsOfUser();
        getActivityOfUser();
        getUser();
    }, []); // Le tableau vide signifie que cela ne s'exécutera qu'une fois après le montage initial.

    return (
        <>
            <div className="dashboardTitle">
                <h1>Bonjour <span>{userData.userInfos && userData.userInfos.firstName}</span></h1>
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="dashboardCards">
                <div className="barChartContainer">
                    <BarchartComponenent data={data} />
                    <div class="dashboardSquaresContainer">
                        <AverageSessionsComponent datas={userSessions} />
                        <RadarchartComponent data={userPerformance} />
                        <ScoreComponent dataScore={userData.score ? userData.score : userData.todayScore} />
                    </div>

                </div>
                <div className="keyDataContainer">
                    <CardsDataComponent data={userData} />
                </div>
            </div>
        </>
    );
}

export default NavbarComponent;
