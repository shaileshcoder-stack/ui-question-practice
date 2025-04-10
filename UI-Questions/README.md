# UIQuestions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


src/
├── app/
│   ├── auth/                          # Auth module
│   │   ├── login/
│   │   │   ├── login.component.ts
│   │   │   ├── login.component.html
│   │   │   └── login.component.css
│   │   ├── signup/
│   │   │   ├── signup.component.ts
│   │   │   ├── signup.component.html
│   │   │   └── signup.component.css
│   │   ├── auth.service.ts            # Handles API requests for login/signup
│   │   ├── auth.guard.ts              # Route protection for authenticated users
│   │   └── token.interceptor.ts       # Adds JWT token to outgoing requests
│
│   ├── core/                          # Core app functionality
│   │   ├── services/
│   │   │   ├── loader.service.ts      # Global loader service
│   │   │   └── storage.service.ts     # LocalStorage / SessionStorage utilities
│   │   └── interceptors/
│   │       └── error.interceptor.ts   # Global error handler interceptor
│
│   ├── components/
│   │   └── loader/
│   │       ├── loader.component.ts
│   │       ├── loader.component.html
│   │       └── loader.component.css
│
│   ├── pages/
│   │   ├── admin-page/
│   │   │   ├── admin-page.component.ts
│   │   │   ├── admin-page.component.html
│   │   │   └── admin-page.component.css
│   │   └── user-page/
│   │       ├── user-page.component.ts
│   │       ├── user-page.component.html
│   │       └── user-page.component.css
│
│   ├── app-routing.module.ts         # App routes (with auth + role-based protection)
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.module.ts                 # Main app module
│
└── assets/
└── styles.css                        # Global styles (Bootstrap can be imported here)



// procedure
//1-auth.service.ts (Handles login, signup, role check, and token access) and Implement Login Component


//2-Let's implement the Signup Component now:
//3-Let's now implement the Loader Service and Loader Component.
//4-Now let’s implement the JWT Token Interceptor and integrate the Loader Service into it to show and hide the loader during HTTP calls.
//5-Let’s now implement Global Error Handling using error.interceptor.ts. This will catch all HTTP errors and handle things like unauthorized access, server errors, etc.
//6-Let's now create a Storage Service to manage localStorage and sessionStorage smartly — including token management, role/user data, and making it Observable if needed.
//7-Let's build the Sign Up and Login components with form validation, Bootstrap styling, and integration with the backend (/api/auth/signup and /api/auth/login).
//8-Great! Let's implement authentication and authorization using: AuthGuard – checks if the user is logged in.RoleGuard – checks if the user has the right role (Admin/User).Routing module – routes protected with guards.

9-Let's now implement the Loader (spinner) service and component, and connect it globally using an HTTP interceptor to show/hide the loader on each HTTP request.
10-Let's now implement a Global Error Handler Interceptor that catches HTTP errors like 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Server Error), etc., and optionally shows alerts or redirects the user

11-Let's now implement a Storage Service that wraps localStorage and sessionStorage for easy and centralized access. This will help you store things like JWT tokens, user info, and app preferences.
12-Let’s now implement Authentication + Authorization + Route Guard in Angular to:
    1- Protect routes (only logged-in users can access)
    2-Restrict access based on roles (Admin or User)
    3-Redirect to login if not authenticated
    4-Use localStorage for auth token and role

13-Let's now build the Login and Signup components with clean Bootstrap styling, two-way binding, and reactive forms.

14-Admin/User Pages