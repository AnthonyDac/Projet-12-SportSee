# Sportsee

Fork the entire repo where you want.

## Installation front-end

```bash
cd sportsee
npm install
```

## Run front-end

```bash
npm run dev
```

## Installation back-end

```bash
cd back-end
npm install
```

## Run back-end

```bash
npm run-script start
```

## Dashboard

As you start on '/dashboard/12' path, you are able to change the ID of the user you want to display. ID 12 is default because of mock user and server user.

Mock User ID :

- 12

Server User IDs :

- 12
- 18

## Use mock instead of server

Go to .env file in '/sportsee/.env' and switch 'VITE_API_MOCK' boolean to true. Set this variable on false to use the server.

## Define score component radial rotation

Go to '/sportsee/src/components/Dashboard/DashboardComponent.jsx' file and switch 'clockWise' props as false to get counter clockwise rotation and true, to get clockwise rotation.

## Server Endpoints

- http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
- http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
- http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).
  Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

## Examples

- http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
- http://localhost:3000/user/18 - Retrieves user 18's main information.
