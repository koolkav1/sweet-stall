# SweetStall

## Prerequisites

Install [Node.js](https://nodejs.org/) (LTS version) if you don't have it already. You can check by running:

```sh
node -v
```

## 1. Clone the repo

```sh
git clone <repo-url>
cd sweet-stall
```

## 2. Install dependencies

```sh
npm install
```

## 3. Create your .env file

At the root of the project, rename `.env.txt` to `.env`:

```
.env
```

This file holds your secret keys — never share it or commit it to git. We'll fill in the values in the steps below.

The finished file will look like this:

```
WEB3FORMS_ACCESS_KEY=your-key-here
FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
IMAGE_CACHE_MAX_AGE=86400
GOOGLE_APPLICATION_CREDENTIALS=./service-account.json
```

`IMAGE_CACHE_MAX_AGE` controls how long browsers cache images (in seconds). `86400` = 1 day, which is a sensible default.

## 4. Web3Forms

Sign up at https://app.web3forms.com/dashboard, go to **Form Setup**, and copy your Form Access Key. It looks like:

```
3a596a32-f8fa-4b1f-b3b9-958283dd6897457
```

Add it to your `.env` file:

```
WEB3FORMS_ACCESS_KEY=3a596a32-f8fa-4b1f-b3b9-958283dd6897457
```

## 5. Firebase setup

We need Firebase for hosting (serving the website) and storage (storing images).

### Create a Firebase project

1. Go to [Firebase Console](https://console.firebase.google.com/) and create an account.
2. Click **Add project** and give it a name (e.g. `gumball-goodieshire`).
3. Upgrade to the **Blaze (pay as you go)** plan — 5 GB storage and 1 GB/day downloads are free. The Angular app is ~400 KB, so ~900 unique visitors/day are covered by the free tier. Repeat visitors are served from their browser cache and don't count against the limit.

### Enable Firebase Storage

1. In the Firebase Console, go to **Build → Storage** and click **Get started**.
2. Accept the default rules and choose a storage location.
3. Once enabled, your bucket name will appear — it looks like `gumball-goodieshire.firebasestorage.app`.

Add it to your `.env`:

```
FIREBASE_STORAGE_BUCKET=gumball-goodieshire.firebasestorage.app
```

### Install Firebase tools and log in

```sh
npm install -g firebase-tools
```

```sh
firebase login
```

### Initialise Firebase in the project

```sh
firebase init
```

When prompted, use the arrow keys and spacebar to select the following features:

- **Hosting: Configure files for Firebase Hosting**
- **Storage: Configure a Security Rules file for Cloud Storage**

Then:

- Choose **Use an existing project** and select the project you just created.
- Accept the defaults for all other prompts (press Enter).

After init, open `.firebaserc` and update the project name from `candy-cart` to your project name (e.g. `gumball-goodieshire`).

### Add the service account key

This allows the image upload scripts to talk to Firebase on your behalf.

1. Firebase Console → **Project Settings** (gear icon) → **Service accounts**.
2. Select **Node.js** and click **Generate new private key** → download the file.
3. Rename the downloaded file to `service-account.json` and place it in the root of the project next to `package.json`.

```
service-account.json
```

`service-account.json` is already in `.gitignore` — never commit it.

Add the following to your `.env`:

```
GOOGLE_APPLICATION_CREDENTIALS=./service-account.json
```

## 6. Run the site locally

Start the dev server:

```sh
npx nx serve sweet-stall
```

Open your browser and go to `http://localhost:4200`.

## 7. Image sync

Drop source images (JPEG, PNG, etc.) into the `images/` folder, then run:

```sh
npm run sync-images
```

This does two things in sequence:

1. **Compress** — converts every image in `images/` to WebP (quality 85) and writes the result to `images/compressed/`. Files that already exist there are skipped, so re-running is safe.
2. **Upload** — uploads every WebP from `images/compressed/` to Firebase Storage and regenerates `src/app/services/image.service.ts` with an array of the public CDN URLs. Files already present in the bucket are also skipped.

You can run either step alone:

```sh
npm run compress-images   # compress only
npm run upload-images     # upload + regenerate service only
```

## 8. Deployment

One command to run tests, lint, build, deploy, and sync images. The checks ensure there are no errors before anything goes live.

```sh
npm run deploy
```
