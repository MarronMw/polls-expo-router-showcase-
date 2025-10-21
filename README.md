# Polls (Expo Router sample)

This is a small showcase app demonstrating Expo Router with a simple authentication flow and persistence of the `loggedIn` state using AsyncStorage.

Key features

- Expo Router-based file-system routing with nested layouts and protected routes.
- Persistence of authentication state (`loggedIn`) using `@react-native-async-storage/async-storage` so the app remembers the user's login across restarts.
- Minimal example structure showing nested screens and tab-like navigation.

Getting started

Requirements

- Node.js (LTS recommended)
- Expo CLI (optional, used by npm scripts)

Install dependencies

```bash
npm install
```

Run the app

Use the npm scripts provided in `package.json`:

```bash
npx expo start   # starts Expo
npm run android # starts Expo and opens on Android emulator/device
npm run ios     # starts Expo and opens on iOS simulator/device
npm run web     # starts the web version
```

Project layout (relevant paths)

- `index.ts` — app entry (uses `expo-router/entry`).
- `app/` — routes and screens used by Expo Router.
  - `app/_layout.tsx` — root layout and global providers.
  - `app/login.tsx` — simple login screen which sets `loggedIn` state.
  - `app/(protected)/_layout.tsx` — layout for protected routes that require authentication.
  - `app/(protected)/(tabs)/...` — nested tab-like routes and example screens (`home`, `second`, `third`, and nested pages).
- `src/components/` — reusable components (example: `AppButton.tsx`, `Screen.tsx`).
- `src/utils/aunthContext.tsx` — authentication context handling `loggedIn` state and AsyncStorage persistence.

How authentication persistence works

The app stores a `loggedIn` flag in AsyncStorage (`@react-native-async-storage/async-storage`). The authentication context reads that flag on startup and updates app state accordingly. When a user logs in or out, the context updates AsyncStorage so the choice persists between app restarts.

Notes and tips

- This project uses `expo` and `expo-router` — the routing is driven by files under the `app/` folder.
- If you add new routes, follow Expo Router's file-based routing conventions. Files and folders under `app/` map to routes.
- To debug AsyncStorage issues, inspect the device logs or use `console.log` in the auth context.

Contributing

Small samples and fixes welcomed. Keep changes minimal and focused on demonstrating router features or auth persistence.

License

MIT
