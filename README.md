# Photography Courses – Client

אפליקציית **React** חד-עמודית (SPA) לאתר מכירת קורסי צילום דיגיטליים. המשתמש יכול לגלוש בקטגוריות ובקורסים, להירשם ולהתחבר, להוסיף קורסים לעגלת קניות, לבצע הזמנה ותשלום, ולצפות בקורסים שרכש. קיים גם אזור ניהול (Admin) לניהול תוכן.

## חיבור לשרת (Backend)

הפרויקט הוא צד לקוח בלבד ומתממשק מול שרת **Node.js / Express** נפרד דרך REST API (כתובת השרת מוגדרת במשתנה סביבה `VITE_API_URL`).

- קישור ל-Repository של השרת: `<הוסף כאן קישור>`

## טכנולוגיות (Tech Stack)

| טכנולוגיה | גרסה | תפקיד |
|---|---|---|
| React | 19.x | ספריית UI |
| Vite | 8.x | כלי build וסביבת פיתוח |
| Redux Toolkit | 2.x | ניהול מצב גלובלי |
| React Redux | 9.x | חיבור Redux לרכיבי React |
| React Router DOM | 7.x | ניתוב בין עמודים |
| Axios | 1.x | קריאות HTTP לשרת |
| Swiper | 14.x | קרוסלות/סליידרים |
| CSS Modules | – | עיצוב מבודד לכל רכיב/עמוד |
| ESLint | 10.x | בדיקת איכות קוד |

## משתני סביבה

יש ליצור קובץ `.env` בתיקיית `client/` עם המשתנה הבא:

```
VITE_API_URL=<כתובת בסיס של השרת, לדוגמה http://localhost:1234>
```

המשתנה נצרך בקובץ [src/API/axiosConfig.js](src/API/axiosConfig.js) כ-`baseURL` עבור כל קריאות ה-API.

## התקנה והרצה מקומית

```bash
git clone <repository-url>
cd client
npm install
npm run dev
```

האפליקציה תרוץ בכתובת שמציג Vite בטרמינל (בדרך כלל `http://localhost:5173`).

## בנייה לפרודקשן

```bash
npm run build
```

הפקודה מייצרת גרסת production אופטימלית (minified) בתיקיית `dist/`, המוכנה לפריסה (deploy) על שרת סטטי.
