#Build: docker build -t realfood/nginx .
#Run: docker run -p 80:80 --name realfood -d realfood/nginx
FROM nginx
COPY dist/web /usr/share/nginx/html