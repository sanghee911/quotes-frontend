FROM nginx
ADD https://github.com/sanghee911/quotes-frontend/archive/master.zip /usr/share/nginx/html
EXPOSE 80