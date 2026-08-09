# Oru Studio

Next.js site with a SQLite-backed blog scheduler, admin dashboard, and automated OpenAI article generation.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3386](http://localhost:3386).

## Required Environment

Copy `.env.example` to `.env.local` for local development or `.env` on the VPS, then fill in the secrets.

Important production values:

```bash
NEXT_PUBLIC_SITE_URL=https://orustudio.com
OPENAI_API_KEY=your-openai-api-key
BLOG_ADMIN_USERNAME=your-admin-username
BLOG_ADMIN_PASSWORD=your-strong-password
BLOG_SESSION_SECRET=long-random-secret
BLOG_CRON_SECRET=long-random-secret
BLOG_DB_PATH=/var/www/Oru-Studio/data/blog.sqlite
```

## VPS Deployment With Nginx

The app runs on port `3386`. Nginx should proxy public traffic to `http://127.0.0.1:3386`.

```bash
cd /var/www/Oru-Studio
npm ci
npm run build
npm install -g pm2
pm2 start ecosystem.config.cjs
pm2 startup
# Run the command that PM2 prints, then:
pm2 save
```

Check that Next.js is running before testing nginx:

```bash
curl -i http://127.0.0.1:3386/api/health
pm2 status
pm2 logs oru-studio --lines 100
```

If the health check fails, nginx will show `502 Bad Gateway` because the upstream app is not responding.

If PM2 shows `Could not find a production build in the '.next' directory`, run this from the project directory:

```bash
cd /var/www/orustudio.com
npm ci
npm run build
pm2 delete oru-studio
pm2 start ecosystem.config.cjs
pm2 save
```

## Nginx Server Block

Example `/etc/nginx/sites-available/orustudio.com`:

```nginx
server {
    listen 80;
    server_name orustudio.com www.orustudio.com;

    location / {
        proxy_pass http://127.0.0.1:3386;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and reload:

```bash
sudo ln -s /etc/nginx/sites-available/orustudio.com /etc/nginx/sites-enabled/orustudio.com
sudo nginx -t
sudo systemctl reload nginx
```

After DNS is pointing at the VPS, add SSL:

```bash
sudo certbot --nginx -d orustudio.com -d www.orustudio.com
```

## Daily Blog Automation

Set a cron job on the VPS to call the protected blog cron endpoint once per day:

```bash
crontab -e
```

```cron
15 8 * * * curl -fsS -H "Authorization: Bearer YOUR_BLOG_CRON_SECRET" https://orustudio.com/api/cron/blog >/dev/null 2>&1
```

The endpoint publishes due scheduled posts and generates a new scheduled article when there is no post for the day.

## 502 Debug Checklist

Run these on the VPS:

```bash
cd /var/www/Oru-Studio
npm run build
pm2 restart oru-studio
curl -i http://127.0.0.1:3386/api/health
sudo nginx -t
sudo tail -n 80 /var/log/nginx/error.log
pm2 logs oru-studio --lines 100
```

If `curl http://127.0.0.1:3386/api/health` works but the domain still shows 502, the problem is nginx configuration. If the curl command fails, the Next.js process is not running correctly.
