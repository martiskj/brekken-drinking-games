# Build the server
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS server-build
COPY ./drinking-games-server ./server

WORKDIR /server/drinking-games-api
RUN dotnet publish -c Release -o ../dist

# Build the client
FROM node:10-alpine as client-build
COPY ./drinking-games-ui ./client

WORKDIR /client
RUN npm install
RUN npm run build

# Run the application
FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS runtime

COPY --from=server-build /server/dist ./app
COPY --from=client-build /client/dist ./app/wwwroot/
EXPOSE 80 443

WORKDIR /app
ENTRYPOINT [ "dotnet", "drinking-games-api.dll", "--urls", "http://0.0.0.0:80" ]

