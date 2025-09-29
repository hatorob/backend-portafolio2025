levatar composer
docker compose up -d

para usar prisma
npm i prisma --save-dev

npx prisma init --datasource-provider postgresql

// para hacer la migración inicial
npx prisma migrate dev --name init
// si hace cambios
npx prisma migrate dev --name change_desc_short_to_text  

// para ver la desc de una tabla en POSTGRESQL
SELECT column_name, data_type, character_maximum_length
FROM information_schema.columns
WHERE table_name = 'projects';

// reset db
npx prisma migrate reset
