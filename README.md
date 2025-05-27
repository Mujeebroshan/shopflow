# ShopFlow E-Commerce Platform

A full-featured e-commerce platform built with React, Express, PostgreSQL, and Stripe integration.

## Features

- ✅ User authentication with Replit Auth
- ✅ Product catalog with categories
- ✅ Shopping cart functionality
- ✅ Secure payment processing with Stripe
- ✅ Responsive design with Tailwind CSS
- ✅ PostgreSQL database with Drizzle ORM

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Payment**: Stripe
- **Authentication**: OpenID Connect (Replit Auth)

## Deployment Instructions

### Step 1: Prepare Your Repository

1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub:
- Create a new repository on GitHub
- Add your repository as remote:
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Sign up for Vercel**: Go to [vercel.com](https://vercel.com) and sign up with GitHub

2. **Connect Repository**: 
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the framework

3. **Configure Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add these variables:
   ```
   DATABASE_URL=your_postgresql_connection_string
   STRIPE_SECRET_KEY=sk_...
   VITE_STRIPE_PUBLIC_KEY=pk_...
   SESSION_SECRET=your_random_secret_string
   REPLIT_DOMAINS=your-deployed-domain.vercel.app
   ```

4. **Deploy**: Click "Deploy" and wait for deployment to complete

### Step 3: Set Up Database

1. **PostgreSQL Options**:
   - **Vercel Postgres**: Add from Vercel dashboard
   - **Railway**: Free PostgreSQL hosting
   - **Supabase**: Free tier with 500MB storage
   - **PlanetScale**: MySQL alternative

2. **Run Database Migration**:
```bash
npm run db:push
```

3. **Seed Initial Data**:
```bash
curl -X POST https://your-domain.vercel.app/api/seed
```

### Alternative Deployment Platforms

#### Railway
1. Connect GitHub repository
2. Add PostgreSQL service
3. Set environment variables
4. Deploy automatically

#### Render
1. Connect GitHub repository
2. Choose "Web Service"
3. Add PostgreSQL database
4. Configure environment variables

#### Heroku
1. Install Heroku CLI
2. Create Heroku app: `heroku create your-app-name`
3. Add PostgreSQL: `heroku addons:create heroku-postgresql:hobby-dev`
4. Set environment variables: `heroku config:set STRIPE_SECRET_KEY=sk_...`
5. Deploy: `git push heroku main`

## Environment Variables Required

```env
DATABASE_URL=postgresql://username:password@host:port/database
STRIPE_SECRET_KEY=sk_test_... (or sk_live_... for production)
VITE_STRIPE_PUBLIC_KEY=pk_test_... (or pk_live_... for production)
SESSION_SECRET=your_random_secret_string
REPLIT_DOMAINS=your-deployed-domain.com
NODE_ENV=production
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables in `.env`

3. Push database schema:
```bash
npm run db:push
```

4. Seed database:
```bash
curl -X POST http://localhost:5000/api/seed
```

5. Start development server:
```bash
npm run dev
```

## Production Checklist

- [ ] All environment variables configured
- [ ] Database schema deployed
- [ ] Initial data seeded
- [ ] Stripe webhooks configured (if needed)
- [ ] Domain configured for authentication
- [ ] SSL certificate enabled
- [ ] Error monitoring set up

## Support

For deployment issues, check the platform-specific documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app)
- [Render Docs](https://render.com/docs)