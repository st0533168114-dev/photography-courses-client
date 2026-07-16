# מסמך אפיון – לקוח (Client)
### פרויקט גמר: אתר רכישת קורסים דיגיטליים
**טכנולוגיה:** React 19 | Vite | Redux Toolkit | React Router DOM v7 | Axios  
**תאריך:** יוני 2026

---

## 1. סקירה כללית

הלקוח הוא אפליקציית React חד-עמודית (SPA) לאתר רכישת קורסים דיגיטליים.  
הוא מתקשר עם השרת דרך REST API, מנהל מצב גלובלי ב-Redux, ומספק חוויית משתמש מלאה: גלישה, הרשמה, רכישה וצפייה בקורסים.

---

## 2. סטאק טכנולוגי

| רכיב | גרסה | תפקיד |
|------|------|--------|
| React | 19.x | ספריית UI |
| Vite | 8.x | build tool וסביבת פיתוח |
| Redux Toolkit | 2.x | ניהול מצב גלובלי |
| React Redux | 9.x | חיבור Redux לרכיבי React |
| React Router DOM | 7.x | ניתוב בין עמודים |
| Axios | 1.x | קריאות HTTP לשרת |

---

## 3. מבנה הפרויקט

```
client/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx             # נקודת כניסה – עוטף ב-Provider של Redux
    ├── App.jsx              # הגדרת כל הנתיבים (Routes)
    ├── App.css
    ├── pages/               # עמודים שלמים
    │   ├── HomePage.jsx
    │   ├── AboutPage.jsx
    │   ├── CategoriesPage.jsx
    │   ├── CoursesPage.jsx
    │   ├── CourseDetailsPage.jsx
    │   ├── ShoppingCartPage.jsx
    │   ├── LoginPage.jsx
    │   ├── SignUpPage.jsx
    │   ├── MyCoursesPage.jsx
    │   ├── ContactUsPage.jsx
    │   └── PaymentConfirmationPage.jsx
    ├── components/          # רכיבים משותפים
    │   ├── CourseCard.jsx
    │   ├── CourseCartItem.jsx
    │   ├── MyCourseItem.jsx
    │   ├── CategoryItem.jsx
    │   ├── AddToCartButton.jsx
    │   ├── DeleteFromCartButton.jsx
    │   ├── PurchaseButton.jsx
    │   ├── WellcomeSection.jsx
    │   ├── CommentsSection.jsx
    │   ├── CommentItem.jsx
    │   ├── FAQSection.jsx
    │   ├── FAQItem.jsx
    │   └── ContactUsSection.jsx
    ├── layout/
    │   ├── Header.jsx
    │   └── Footer.jsx
    ├── redux/
    │   ├── store.js
    │   └── slices/
    │       ├── authSlice.js
    │       ├── coursesSlice.js
    │       ├── shoppingCartSlice.js
    │       ├── categoriesSlice.js
    │       └── orderSlice.js
    └── API/
        ├── axiosConfig.js
        ├── userApi.js
        ├── coursesApi.js
        ├── categoryApi.js
        ├── shoppingCartApi.js
        ├── orderApi.js
        └── paymentApi.js
```

---

## 4. ניתוב (Routing)

| נתיב | עמוד | נגיש ל |
|------|------|--------|
| `/` | HomePage | כולם |
| `/about` | AboutPage | כולם |
| `/categories` | CategoriesPage | כולם |
| `/courses` | CoursesPage (כל הקורסים) | כולם |
| `/courses/:categoryId` | CoursesPage (מסונן לפי קטגוריה) | כולם |
| `/ShoppingCartPage` | ShoppingCartPage | משתמש מחובר |
| `/login` | LoginPage | לא מחובר |
| `/signUp` | SignUpPage | לא מחובר |
| `/myCourses` | MyCoursesPage | משתמש מחובר |
| `/contactUs` | ContactUsPage | כולם |

---

## 5. ניהול מצב – Redux Store

### 5.1 auth slice

מנהל את מצב ההתחברות של המשתמש.

| שדה | סוג | תיאור |
|-----|-----|-------|
| user | Object / null | פרטי המשתמש המחובר |
| isLoggedIn | boolean | האם המשתמש מחובר |
| isLoading | boolean | האם מתבצעת פעולה אסינכרונית |
| error | String / null | הודעת שגיאה |

**Thunks:**

| פונקציה | תיאור |
|---------|-------|
| `checkAuth` | בודק בטעינת האפליקציה אם יש טוקן תקף ב-localStorage |
| `loginUser` | שולח בקשת התחברות לשרת, שומר טוקן |
| `registerUser` | שולח בקשת הרשמה לשרת |

**Reducers:**

| פונקציה | תיאור |
|---------|-------|
| `logoutUser` | מוחק טוקן מ-localStorage, מאפס מצב |

### 5.2 courses slice

מנהל את רשימת הקורסים.

| שדה | סוג | תיאור |
|-----|-----|-------|
| coursesList | Array | כל הקורסים שנטענו מהשרת |
| isLoading | boolean | |
| error | String / null | |

**Thunks:**

| פונקציה | תיאור |
|---------|-------|
| `getCourses` | טוען את כל הקורסים מהשרת |

### 5.3 shoppingCart slice

מנהל את עגלת הקניות.

| שדה | סוג | תיאור |
|-----|-----|-------|
| cart | Object / null | עגלת הקניות (כולל courseList ו-subtotal) |
| isLoading | boolean | |
| error | Object / null | |

**Thunks:**

| פונקציה | תיאור |
|---------|-------|
| `getCart` | שולף את העגלה של המשתמש המחובר |
| `addToCart` | מוסיף קורס לעגלה לפי courseId |
| `removeFromCart` | מסיר קורס מהעגלה לפי courseId |

**Reducers:**

| פונקציה | תיאור |
|---------|-------|
| `clearCart` | מרוקן את העגלה מקומית (לאחר תשלום) |

---

## 6. שכבת API

### axiosConfig.js

יוצר instance של axios עם **interceptor** שמוסיף אוטומטית את ה-JWT לכל בקשה:
```
Authorization: Bearer <token מ-localStorage>
```

### קבצי API

| קובץ | תיאור |
|------|-------|
| `userApi.js` | login, register, getProfile |
| `coursesApi.js` | getCourses, getCourseById, getByCategoryId |
| `categoryApi.js` | getCategories, getCategoryById |
| `shoppingCartApi.js` | getShoppingCart, addToShoppingCart, removeFromShoppingCart |
| `orderApi.js` | createOrder, getUserOrders |
| `paymentApi.js` | createPayment |

---

## 7. עמודים – תיאור פונקציונלי

### 7.1 HomePage
דף הבית. מכיל:
- `WellcomeSection` – מסך פתיחה/ברוכים הבאים
- `CommentsSection` – תגובות / המלצות לקוחות
- `FAQSection` – שאלות ותשובות נפוצות
- `ContactUsSection` – טופס/קישור לצור קשר

### 7.2 CategoriesPage
מציג את כל הקטגוריות כרשימה/גריד של `CategoryItem`.  
לחיצה על קטגוריה מנווטת ל-`/courses/:categoryId`.

### 7.3 CoursesPage
מציג קורסים כרשימת `CourseCard`.  
אם קיים `categoryId` ב-URL – מסנן את הקורסים לפי קטגוריה.  
מביא נתונים מ-Redux (courses slice).

### 7.4 ShoppingCartPage
מציג את פריטי העגלה (`CourseCartItem`) וסכום לתשלום.  
כפתור `PurchaseButton` מפעיל יצירת הזמנה ותשלום.  
אם העגלה ריקה – מציג הודעה מתאימה.

### 7.5 LoginPage
טופס שם משתמש + סיסמה.  
שולח `loginUser` thunk.  
אם המשתמש כבר מחובר (`isLoggedIn`) – מנתב אוטומטית לדף הבית.

### 7.6 SignUpPage
טופס הרשמה (firstName, lastName, email, userName, password, phoneNumber).  
שולח `registerUser` thunk.

### 7.7 MyCoursesPage
מציג את הקורסים שהמשתמש רכש, כרשימת `MyCourseItem`.

### 7.8 PaymentConfirmationPage
מוצג לאחר תשלום מוצלח.  
מציג אישור ותודה.

### 7.9 AboutPage / ContactUsPage
עמודים סטטיים עם מידע על האתר וטופס יצירת קשר.

---

## 8. רכיבים – תיאור

| רכיב | תיאור |
|------|-------|
| `Header` | תפריט ניווט עם NavLink לכל העמודים |
| `Footer` | תחתית האתר |
| `CourseCard` | כרטיס קורס – תמונה, שם, מחיר, כפתור הוסף לעגלה |
| `CourseCartItem` | פריט בעגלה – שם, מחיר, כפתור הסרה |
| `MyCourseItem` | קורס שנרכש – מוצג בדף "הקורסים שלי" |
| `CategoryItem` | כרטיס קטגוריה – לחיצה מנווטת לקורסים |
| `AddToCartButton` | כפתור הוספה לעגלה – שולח `addToCart` thunk |
| `DeleteFromCartButton` | כפתור הסרה מהעגלה – שולח `removeFromCart` thunk |
| `PurchaseButton` | כפתור קנייה – יוצר הזמנה ותשלום |
| `WellcomeSection` | אזור פתיחה בדף הבית |
| `CommentsSection` | מכיל רשימת `CommentItem` |
| `CommentItem` | תגובה/המלצה בודדת |
| `FAQSection` | מכיל רשימת `FAQItem` |
| `FAQItem` | שאלה ותשובה בודדת |
| `ContactUsSection` | אזור יצירת קשר |

---

## 9. אימות משתמש – זרימה מלאה

```
טעינת האפליקציה (App.jsx)
    ↓
dispatch(checkAuth())
    ↓
בודק localStorage לטוקן קיים
    ↓
    ├── יש טוקן → GET /users/profile → מאכלס state.auth.user
    └── אין טוקן → state.isLoggedIn = false

משתמש לוחץ "כניסה"
    ↓
dispatch(loginUser({ userName, password }))
    ↓
POST /users/login → מקבל { token, user }
    ↓
שומר token ב-localStorage
    ↓
state.isLoggedIn = true → מנתב לדף הבית

משתמש לוחץ "יציאה"
    ↓
dispatch(logoutUser())
    ↓
מוחק token מ-localStorage → state.isLoggedIn = false
```

---

## 10. זרימת רכישה מלאה

```
1. משתמש גולש ב-CoursesPage
2. לוחץ "הוסף לעגלה" → AddToCartButton → dispatch(addToCart(courseId))
3. נכנס ל-ShoppingCartPage → dispatch(getCart())
4. רואה פריטים וסה"כ לתשלום
5. לוחץ "לרכישה" → PurchaseButton
   → יצירת הזמנה: POST /orders
   → יצירת תשלום: POST /payments
   → dispatch(clearCart())
6. מועבר ל-PaymentConfirmationPage
```

---

## 11. הרצת הפרויקט

```bash
cd client
npm run dev
```

האפליקציה רצה על: `http://localhost:5173`  
השרת צריך לרוץ במקביל על: `http://localhost:1234`
