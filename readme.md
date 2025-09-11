levatar composer
docker compose up -d

para usar prisma
npm i prisma --save-dev

npx prisma init --datasource-provider postgresql

// para hacer la migración
npx prisma migrate dev --name init  